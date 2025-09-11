
import { type NextRequest, NextResponse } from 'next/server';
import { decryptBankDetail } from '@/lib/encryption';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { applicationId } = await request.json();

    if (!applicationId) {
      return NextResponse.json({ success: false, error: 'Application ID is required' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('membership_applications')
      .select('sort_code_encrypted, account_number_encrypted')
      .eq('application_id', applicationId)
      .single();

    if (error) {
      console.error('❌ Supabase select error:', error);
      return NextResponse.json({ success: false, error: 'Failed to retrieve application' }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ success: false, error: 'Application not found' }, { status: 404 });
    }

    const sortCode = decryptBankDetail(data.sort_code_encrypted);
    const accountNumber = decryptBankDetail(data.account_number_encrypted);

    return NextResponse.json({ success: true, sortCode, accountNumber });
  } catch (error) {
    console.error('❌ Decryption error:', error);
    return NextResponse.json({ success: false, error: 'Failed to decrypt bank details' }, { status: 500 });
  }
}
