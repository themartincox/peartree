import { type NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { decryptBankDetail } from '@/lib/encryption';

// Check if we're in a build environment
const isBuildOrSSR = process.env.NODE_ENV === 'production' && typeof window === 'undefined';

export async function GET(request: NextRequest) {
  try {
    // During build time, return mock data to avoid Supabase connection issues
    if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
      console.log('Build environment detected, returning mock data');
      return NextResponse.json({
        success: true,
        applications: [],
        count: 0,
        pagination: {
          page: 1,
          limit: 100,
          total: 0,
          pages: 0
        },
        statuses: { all: 0, new: 0, processing: 0, completed: 0, error: 0 }
      });
    }

    console.log('Admin API called - starting...');

    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format');
    const download = searchParams.get('download') === 'true';
    const status = searchParams.get('status') || 'all'; // Filter by status
    const page = Number.parseInt(searchParams.get('page') || '1', 10);
    const limit = Number.parseInt(searchParams.get('limit') || '100', 10);

    console.log('Request parameters:', { format, download, status, page, limit });

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    // Fetch applications from Supabase with pagination
    let query = supabaseAdmin
      .from('membership_applications')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    // Apply status filter if provided
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    const { data: applications, error, count } = await query;

    if (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }

    console.log(`Retrieved ${applications?.length || 0} applications, total: ${count || 'unknown'}`);

    // Process applications (always decrypt bank details for admin use)
    const processedApplications = applications?.map(app => {
      // Always decrypt bank details for staff to use in payment systems
      const appWithDecryptedBank = {
        ...app,
        sort_code: decryptBankDetail(app.sort_code_encrypted),
        account_number: decryptBankDetail(app.account_number_encrypted),
      };

      // Remove encrypted versions from response
      delete appWithDecryptedBank.sort_code_encrypted;
      delete appWithDecryptedBank.account_number_encrypted;

      return appWithDecryptedBank;
    }) || [];

    // Return CSV if requested
    if (format === 'csv') {
      const csvContent = convertToCSV(processedApplications);
      const filename = `membership-applications-${new Date().toISOString().split('T')[0]}.csv`;

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': download ? `attachment; filename="${filename}"` : 'inline',
        },
      });
    }

    // Return standard JSON response
    return NextResponse.json({
      success: true,
      applications: processedApplications,
      count: count || processedApplications.length,
      pagination: {
        page,
        limit,
        total: count || processedApplications.length,
        pages: count ? Math.ceil(count / limit) : 1
      },
      statuses: await getApplicationStatusCounts()
    });

  } catch (error) {
    console.error('Error in admin applications API:', error);

    // Return a detailed error response
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve applications',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Convert applications to CSV format
const convertToCSV = (applications: any[]): string => {
  if (applications.length === 0) return 'No applications found';

  // Define CSV headers
  const headers = [
    'Application ID',
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Plan Name',
    'Plan Price',
    'Date of Birth',
    'Address',
    'Postcode',
    'Is Existing Patient',
    'Preferred Dentist',
    'Dentist Gender Preference',
    'Account Holder Name',
    'Sort Code',
    'Account Number',
    'Partner First Name',
    'Partner Last Name',
    'Partner Email',
    'Status',
    'Email Sent',
    'Staff Member Name'
  ];

  // Convert data to CSV rows
  const rows = applications.map(app => [
    app.application_id || '',
    new Date(app.created_at).toLocaleString() || '',
    app.first_name || '',
    app.last_name || '',
    app.email || '',
    app.phone || '',
    app.plan_name || '',
    app.plan_price || '',
    app.date_of_birth || '',
    app.address || '',
    app.postcode || '',
    app.is_existing_patient || '',
    app.preferred_dentist || '',
    app.dentist_gender_preference || '',
    app.account_holder_name || '',
    app.sort_code || '',
    app.account_number || '',
    app.partner_first_name || '',
    app.partner_last_name || '',
    app.partner_email || '',
    app.status || '',
    app.email_sent ? 'Yes' : 'No',
    app.staff_member_name || ''
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows]
    .map(row => row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  return csvContent;
};

// Get counts of applications by status
async function getApplicationStatusCounts() {
  try {
    // During build time, return mock data
    if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
      return { all: 0, new: 0, processing: 0, completed: 0, error: 0 };
    }

    const { data, error } = await supabaseAdmin
      .from('membership_applications')
      .select('status')
      .is('deleted_at', null);

    if (error) throw error;

    const statusCounts: Record<string, number> = {
      all: data.length,
      new: 0,
      processing: 0,
      completed: 0,
      error: 0
    };

    // Count applications by status
    data.forEach(item => {
      const status = item.status || 'unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    return statusCounts;
  } catch (error) {
    console.error('Error getting status counts:', error);
    return { all: 0, new: 0, processing: 0, completed: 0, error: 0 };
  }
}

// DELETE endpoint to delete applications (for admin use only)
export async function DELETE(request: NextRequest) {
  try {
    // During build time, return mock success response
    if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
      return NextResponse.json({
        success: true,
        message: `Application deleted successfully (build simulation)`
      });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Delete a specific application (soft delete)
      const { error } = await supabaseAdmin
        .from('membership_applications')
        .update({
          deleted_at: new Date().toISOString(),
          status: 'deleted'
        })
        .eq('application_id', id);

      if (error) throw error;

      return NextResponse.json({
        success: true,
        message: `Application ${id} deleted successfully`
      });
    } else {
      // Delete all applications (soft delete all)
      const { error } = await supabaseAdmin
        .from('membership_applications')
        .update({
          deleted_at: new Date().toISOString(),
          status: 'deleted'
        })
        .is('deleted_at', null);

      if (error) throw error;

      return NextResponse.json({
        success: true,
        message: 'All applications deleted successfully'
      });
    }
  } catch (error) {
    console.error('Error deleting applications:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete applications',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// PATCH endpoint to update application status
export async function PATCH(request: NextRequest) {
  try {
    // During build time, return mock success response
    if (isBuildOrSSR && process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
      return NextResponse.json({
        success: true,
        message: `Application updated successfully (build simulation)`
      });
    }

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('membership_applications')
      .update({
        status,
        admin_notes: notes,
        processed_at: status === 'completed' ? new Date().toISOString() : null
      })
      .eq('application_id', id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: `Application ${id} updated successfully`
    });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update application',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
