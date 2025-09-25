/** Legacy: raw items (kept for compatibility) — UPDATED for your model */
export async function fetchBlogPosts(opts?: number | { limit?: number }) {
  const limit = typeof opts === "number" ? opts : opts?.limit ?? 1000;

  // Use your actual Contentful content type id (API identifier).
  // Default to "pageBlogPost" to match your current fields.
  const typeId =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";

  // Your page uses "publishedDate". Allow override via env if you ever rename it.
  const dateField = process.env.CONTENTFUL_BLOG_DATE_FIELD || "publishedDate";

  const baseQuery: any = {
    content_type: typeId,
    limit,
    // IMPORTANT: do NOT use "select" here so you keep
    // subtitle, featuredImage, author, etc. available to your page.
  };

  // 1) Try ordering by your date field, then updatedAt
  let res: any = await cfEntries(
    { ...baseQuery, order: [`-fields.${dateField}`, "-sys.updatedAt"] },
    "fetchBlogPosts:byDate"
  );

  // 2) If empty (e.g. some entries missing the date), retry by updatedAt only
  if (!res?.items?.length) {
    res = await cfEntries(
      { ...baseQuery, order: ["-sys.updatedAt"] },
      "fetchBlogPosts:byUpdatedAt"
    );
  }

  return res?.items ?? [];
}