// src/app/api/lead/route.ts
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Log the lead capture (replace with your actual lead storage logic)
    console.log('[lead]', {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get('user-agent'),
      ip: req.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0',
    })

    // Here you would add code to:
    // 1. Send an email notification to staff
    // 2. Add to CRM (e.g., via API call)
    // 3. Store in database

    // For demo, just log and return success
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Error processing lead:', err)
    return new Response('Bad request', { status: 400 })
  }
}
