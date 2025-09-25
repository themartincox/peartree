// src/app/api/diag-contentful/route.ts
import { NextResponse } from "next/server";
import { flags, cfEntries } from "@/lib/contentful";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function probeByType(typeId: string, opts?: { locale?: string }) {
  try {
    const res = await cfEntries<any>(
      {
        content_type: typeId,
        limit: 5,
        order: ["-sys.updatedAt"],
        include: 0,
        ...(opts?.locale ? { locale: opts.locale } : {}),
      },
      `diag:${typeId}${opts?.locale ? `:${opts.locale}` : ""}`
    );
    const items = (res?.items ?? []).map((it: any) => ({
      contentType: it?.sys?.contentType?.sys?.id,
      slug: it?.fields?.slug,
      title: it?.fields?.title ?? it?.fields?.name,
      hasPublishedDate: "publishedDate" in (it?.fields ?? {}),
      hasDate: "date" in (it?.fields ?? {}),
      locale: it?.sys?.locale,
      updatedAt: it?.sys?.updatedAt,
    }));
    return { ok: true, count: items.length, items };
  } catch (e: any) {
    return { ok: false, error: e?.message || String(e) };
  }
}

async function probeAny(opts?: { locale?: string }) {
  try {
    const res = await cfEntries<any>(
      {
        limit: 5,
        order: ["-sys.updatedAt"],
        include: 0,
        ...(opts?.locale ? { locale: opts.locale } : {}),
      },
      `diag:any${opts?.locale ? `:${opts.locale}` : ""}`
    );
    const items = (res?.items ?? []).map((it: any) => ({
      contentType: it?.sys?.contentType?.sys?.id,
      slug: it?.fields?.slug,
      sampleFields: Object.keys(it?.fields || {}).slice(0, 6),
      locale: it?.sys?.locale,
      updatedAt: it?.sys?.updatedAt,
    }));
    return { ok: true, count: items.length, items };
  } catch (e: any) {
    return { ok: false, error: e?.message || String(e) };
  }
}

export async function GET() {
  const typeFromEnv =
    process.env.CONTENTFUL_BLOG_POST_TYPE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_BLOG_POST_TYPE_ID ||
    "pageBlogPost";

  const env = {
    CONTENTFUL_SPACE_ID: !!process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || "master",
    CONTENTFUL_USE_PREVIEW: process.env.CONTENTFUL_USE_PREVIEW || "false",
    CONTENTFUL_BLOG_POST_TYPE_ID: typeFromEnv,
    FAST_BUILD: process.env.FAST_BUILD || "unset",
    USE_MOCK_DATA: process.env.USE_MOCK_DATA || "unset",
  };

  const checks = {
    byEnvType_defaultLocale: await probeByType(typeFromEnv),
    byEnvType_enGB: await probeByType(typeFromEnv, { locale: "en-GB" }),

    // Common alternates people use
    by_blogPost: await probeByType("blogPost"),
    by_pageBlogPost: await probeByType("pageBlogPost"),
    by_article: await probeByType("article"),

    // No content_type: enumerate what exists at all
    any_defaultLocale: await probeAny(),
    any_enGB: await probeAny({ locale: "en-GB" }),
  };

  return NextResponse.json({ flags, env, checks });
}