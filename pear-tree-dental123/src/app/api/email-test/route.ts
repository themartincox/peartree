import { NextResponse } from 'next/server';

export async function GET() {
  console.log('🧪 Email configuration test requested');

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  const config = {
    emailUserConfigured: !!emailUser,
    emailPassConfigured: !!emailPass,
    emailUserLength: emailUser ? emailUser.length : 0,
    emailPassLength: emailPass ? emailPass.length : 0,
    nodeEnv: process.env.NODE_ENV,
    netlifyEnv: !!process.env.NETLIFY,
    vercelEnv: !!process.env.VERCEL,
    awsLambda: !!process.env.AWS_LAMBDA_FUNCTION_NAME
  };

  console.log('📧 Email configuration status:', config);

  return NextResponse.json({
    message: 'Email configuration test',
    timestamp: new Date().toISOString(),
    config
  });
}
