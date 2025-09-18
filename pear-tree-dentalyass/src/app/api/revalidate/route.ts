// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

// Webhook-triggered revalidation for Contentful
export async function POST(req: NextRequest) {
  // 1. Verify the request is from a trusted source using a secret token
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    // 2. Parse the request body to get the tags to revalidate
    const body = await req.json();
    
    // The body can contain tags directly, or be a Contentful webhook payload
    let tagsToRevalidate: string[] = [];

    // Scenario A: Simple payload with a 'tags' array
    if (body.tags && Array.isArray(body.tags)) {
      tagsToRevalidate = body.tags;
    } 
    // Scenario B: Contentful webhook payload
    else if (body.sys && body.sys.id && body.sys.contentType && body.sys.contentType.sys.id) {
      const contentTypeId = body.sys.contentType.sys.id;
      const entryId = body.sys.id;
      
      // Add tags based on Contentful structure, matching our client logic
      tagsToRevalidate.push('contentful'); // Broad tag for all contentful content
      tagsToRevalidate.push(contentTypeId); // Tag for the content type
      tagsToRevalidate.push(entryId); // Tag for the specific entry

      // If the entry has a slug, we can also revalidate by slug
      if (body.fields && body.fields.slug && body.fields.slug['en-US']) {
         tagsToRevalidate.push(`slug:${body.fields.slug['en-US']}`);
      }
    }

    if (tagsToRevalidate.length === 0) {
      return NextResponse.json({ message: 'No valid tags or Contentful payload found for revalidation' }, { status: 400 });
    }

    // 3. Revalidate each tag
    tagsToRevalidate.forEach((tag: string) => revalidateTag(tag));

    console.log(`Revalidated tags: ${tagsToRevalidate.join(', ')}`);

    // 4. Return a success response
    return NextResponse.json({
      revalidated: true,
      revalidatedTags: tagsToRevalidate,
      timestamp: new Date().toISOString(),
    });

  } catch (err) {
    let errorMessage = 'Error revalidating';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    console.error('Revalidation error:', errorMessage);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}