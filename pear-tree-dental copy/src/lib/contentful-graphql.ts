import "server-only";

interface GraphQLRequestOptions {
  preview?: boolean;
  revalidate?: number | false;
  tags?: string[];
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message?: string }>;
}

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? "master";

const GRAPHQL_ENDPOINT = SPACE
  ? `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`
  : null;

function resolveToken(preview?: boolean) {
  const usePreview = preview ?? process.env.CONTENTFUL_USE_PREVIEW === "true";
  const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;
  const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

  const token = usePreview ? previewToken : deliveryToken;

  if (!token) {
    throw new Error(
      usePreview
        ? "CONTENTFUL_PREVIEW_TOKEN (or CONTENTFUL_ACCESS_TOKEN) must be set when preview mode is enabled"
        : "CONTENTFUL_DELIVERY_TOKEN must be set to query Contentful GraphQL"
    );
  }

  return { token, usePreview };
}

export async function contentfulGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: GraphQLRequestOptions = {}
): Promise<T> {
  if (!GRAPHQL_ENDPOINT || !SPACE) {
    console.warn("[contentfulGraphQL] Contentful credentials missing – returning empty result.");
    return {} as T;
  }

  let token: string;
  let usePreview = false;

  try {
    const resolved = resolveToken(options.preview);
    token = resolved.token;
    usePreview = resolved.usePreview;
  } catch (error) {
    console.warn(
      "[contentfulGraphQL] Unable to resolve Contentful token, falling back to empty data.",
      error,
    );
    return {} as T;
  }

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),
      next: {
        revalidate: options.revalidate ?? (usePreview ? 0 : 300),
        tags: options.tags,
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Contentful GraphQL error: ${response.status} ${response.statusText} — ${body}`);
    }

    const payload = (await response.json()) as GraphQLResponse<T>;

    if (payload.errors?.length) {
      const message = payload.errors.map((error) => error.message).join(" | ");
      throw new Error(`Contentful GraphQL responded with errors: ${message}`);
    }

    if (!payload.data) {
      throw new Error("Contentful GraphQL response did not include data");
    }

    return payload.data;
  } catch (error) {
    console.warn(
      "[contentfulGraphQL] Request failed, using fallback content instead of Contentful data.",
      error,
    );
    return {} as T;
  }
}
