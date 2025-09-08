// src/app/api/cf-diag/route.ts
import { NextResponse } from 'next/server'
import { SERVICE_TYPE, LOCATION_TYPE, TEMPLATE_TYPE } from '@/lib/contentTypes'

async function fetchJSON(url: string, token: string) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    // avoid caching so we always see latest
    cache: 'no-store',
  })
  const text = await res.text().catch(() => '')
  try {
    return { ok: res.ok, status: res.status, json: JSON.parse(text) }
  } catch {
    return { ok: res.ok, status: res.status, json: text }
  }
}

export async function GET() {
  const space = process.env.CONTENTFUL_SPACE_ID
  const env = process.env.CONTENTFUL_ENVIRONMENT || 'master'
  const usePreview = (process.env.CONTENTFUL_USE_PREVIEW || 'false').toLowerCase() === 'true'
  const host = usePreview ? 'preview.contentful.com' : 'cdn.contentful.com'
  const token = usePreview
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : (process.env.CONTENTFUL_DELIVERY_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN)

  if (!space || !token) {
    return NextResponse.json(
      { ok: false, error: 'Missing CONTENTFUL_SPACE_ID or DELIVERY/PREVIEW token' },
      { status: 500 }
    )
  }

  const base = `https://${host}/spaces/${space}/environments/${env}`

  const [typesRes, serviceRes, locationRes, templateRes] = await Promise.all([
    fetchJSON(`${base}/content_types`, token),
    fetchJSON(`${base}/entries?content_type=${encodeURIComponent(SERVICE_TYPE)}&limit=1`, token),
    fetchJSON(`${base}/entries?content_type=${encodeURIComponent(LOCATION_TYPE)}&limit=1`, token),
    fetchJSON(`${base}/entries?content_type=${encodeURIComponent(TEMPLATE_TYPE)}&limit=1`, token),
  ])

  const summarise = (r: any) => ({ ok: r.ok, status: r.status, total: r?.json?.total ?? null, sampleId: r?.json?.items?.[0]?.sys?.id ?? null, error: r?.json?.message || null })

  return NextResponse.json({
    space,
    environment: env,
    host,
    types: summarise(typesRes),
    service: { typeId: SERVICE_TYPE, ...summarise(serviceRes) },
    location: { typeId: LOCATION_TYPE, ...summarise(locationRes) },
    template: { typeId: TEMPLATE_TYPE, ...summarise(templateRes) },
  })
}
