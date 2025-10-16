import { NextResponse } from "next/server";

type Diag = {
  ok: boolean;
  mode: "delivery" | "preview";
  endpoint: string;
  spaceId?: string;
  environment?: string;
  tokenNameUsed?: string;
  hasToken?: boolean;
  lastGraphQLStatus?: number | null;
  lastGraphQLErrors?: any;
  sampleQueryOk?: boolean;
  hints?: string[];
};

export async function GET() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

  // Try the common variable names you’ve used across the codebase
  const candidates = [
    "CONTENTFUL_DELIVERY_TOKEN",
    "CONTENTFUL_ACCESS_TOKEN",
    "CONTENTFUL_GRAPHQL_TOKEN",
    "CONTENTFUL_CDA_TOKEN",
  ] as const;

  let token: string | undefined;
  let tokenNameUsed: string | undefined;
  for (const name of candidates) {
    const v = process.env[name];
    if (v && !token) {
      token = v;
      tokenNameUsed = name;
    }
  }

  const usePreview = String(process.env.CONTENTFUL_USE_PREVIEW || "").toLowerCase() === "true";
  const mode: "delivery" | "preview" = usePreview ? "preview" : "delivery";
  const endpoint =
    mode === "preview"
      ? `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?preview=true`
      : `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;

  const diag: Diag = {
    ok: false,
    mode,
    endpoint,
    spaceId,
    environment,
    tokenNameUsed,
    hasToken: Boolean(token),
    lastGraphQLStatus: null,
    lastGraphQLErrors: null,
    sampleQueryOk: false,
    hints: [],
  };

  // Basic sanity hints up front
  if (!spaceId) diag.hints.push("Missing CONTENTFUL_SPACE_ID.");
  if (!environment) diag.hints.push("Missing CONTENTFUL_ENVIRONMENT (defaulting to 'master').");
  if (!token) diag.hints.push(`No token found in ${candidates.join(", ")}.`);

  // If anything critical is missing, return early
  if (!spaceId || !token) {
    return NextResponse.json(diag, { status: 200 });
  }

  // Minimal GraphQL query – tweak a content type name you know exists
  const query = /* GraphQL */ `
    query DiagServices($limit: Int!) {
      serviceCollection(limit: $limit) {
        total
        items {
          sys { id }
          slug
          title
        }
      }
    }
  `;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { limit: 1 } }),
      // Contentful is fine without caching for a diag call
      next: { revalidate: 0 },
    });

    diag.lastGraphQLStatus = res.status;

    const json = await res.json().catch(() => ({}));
    if (json?.errors) {
      diag.lastGraphQLErrors = json.errors;
      // Helpful error tips
      const codes = JSON.stringify(json.errors);
      if (/ACCESS_TOKEN_INVALID|Authentication failed/i.test(codes)) {
        diag.hints.push(
          "Token invalid for this endpoint. If CONTENTFUL_USE_PREVIEW=false, you must use a Delivery (CDA) token.",
        );
        diag.hints.push(
          "If CONTENTFUL_USE_PREVIEW=true, use a Preview (CPA) token or append preview=true to endpoint as done here.",
        );
      }
      if (/UnknownType|Cannot query field/i.test(codes)) {
        diag.hints.push(
          "Your GraphQL model may differ (content type not named 'service'). Change the sample query to a type that exists.",
        );
      }
    }

    // Success path
    if (res.ok && json?.data) {
      const total = json.data?.serviceCollection?.total ?? 0;
      diag.sampleQueryOk = true;
      diag.ok = true;
      if (total === 0) {
        diag.hints.push("Auth OK, but no items returned. Check environment and content type name.");
      }
    } else {
      diag.sampleQueryOk = false;
    }
  } catch (e: any) {
    diag.hints.push(`Network/Fetch error: ${e?.message || e}`);
  }

  // Final generic hints
  diag.hints.push(
    `Ensure the token belongs to space "${spaceId}" and environment "${environment}" and has the 'Content Delivery API - access' permission.`,
  );
  if (mode === "delivery") {
    diag.hints.push("Currently using Delivery endpoint. Set CONTENTFUL_USE_PREVIEW=true to test Preview.");
  } else {
    diag.hints.push("Currently using Preview endpoint. Set CONTENTFUL_USE_PREVIEW=false to switch to Delivery.");
  }

  return NextResponse.json(diag, { status: 200 });
}