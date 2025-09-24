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

if (!SPACE) {
  throw new Error("CONTENTFUL_SPACE_ID must be defined to use the GraphQL client");
}

const GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

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
  const { token, usePreview } = resolveToken(options.preview);

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
}
