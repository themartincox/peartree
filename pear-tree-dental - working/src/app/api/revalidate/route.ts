// src/app/api/revalidate/route.ts
import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  // Verify the request contains the secret token
  const secret = req.nextUrl.searchParams.get('secret')

  // Use NEXT_REVALIDATE_TOKEN from environment variables
  if (secret !== process.env.NEXT_REVALIDATE_TOKEN) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    // Parse the request body to get paths to revalidate
    const body = await req.json()
    const { service, suburb, path } = body

    let revalidatedPath: string

    if (path) {
      // If a specific path is provided, revalidate that
      revalidatedPath = path
    } else if (service && suburb) {
      // If service and suburb are provided, revalidate that page
      revalidatedPath = `/blog/${service}/${suburb}`
    } else {
      // Default to home page if no specific path
      revalidatedPath = '/'
    }

    // Revalidate the path
    revalidatePath(revalidatedPath)

    // Log the revalidation
    console.log(`Revalidated: ${revalidatedPath}`)

    return Response.json({
      revalidated: true,
      path: revalidatedPath,
      timestamp: new Date().toISOString()
    })
  } catch (err) {
    console.error('Revalidation error:', err)
    return new Response('Error revalidating', { status: 500 })
  }
}
