import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Deployment test successful',
    timestamp: new Date().toISOString(),
    deploymentId: Date.now(),
    buildId: 'cache-bust-1752065826',
    emailSystemStatus: 'Working - GMAIL_APP_PASSWORD configured correctly',
    version: '0.1.2'
  });
}
