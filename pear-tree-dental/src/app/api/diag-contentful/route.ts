// src/app/api/diag-contentful/route.ts
import { NextResponse } from "next/server";
import { flags, cfEntries } from "@/lib/contentful";

export const dynamic = "force-dynamic"; // ensure no ISR cache for this route
export const revalidate = 0;

export async function GET() {
  const typeId =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";

  const dateField = process.env.CONTENTFUL_BLOG_DATE_FIELD || "publishedDate";

  try {
    const probe = await cfEntries<any>(
      {
        content_type: typeId,
        limit: 12,
        order: [`-fields.${dateField}`, "-sys.updatedAt"],
        include: 1,
        select:
          "fields.slug,fields.title,fields.publishedDate,fields.date,sys.updatedAt",
      },
      "diag"
    );

    const items = (probe?.items ?? []).map((it: any) => ({
      slug: it?.fields?.slug,
      title: it?.fields?.title,
      publishedDate: it?.fields?.publishedDate,
      date: it?.fields?.date,
      updatedAt: it?.sys?.updatedAt,
    }));

    return NextResponse.json({
      flags,
      env: {
        CONTENTFUL_SPACE_ID: !!process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || "master",
        CONTENTFUL_USE_PREVIEW:
          process.env.CONTENTFUL_USE_PREVIEW || "false",
        CONTENTFUL_BLOG_POST_TYPE_ID: typeId,
        CONTENTFUL_BLOG_DATE_FIELD: dateField,
        FAST_BUILD: process.env.FAST_BUILD || "unset",
        USE_MOCK_DATA: process.env.USE_MOCK_DATA || "unset",
      },
      count: items.length,
      items,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || String(e), stack: e?.stack },
      { status: 500 }
    );
  }
}