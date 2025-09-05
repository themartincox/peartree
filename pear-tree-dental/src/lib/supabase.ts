import { createClient } from '@supabase/supabase-js'

// Check if we're in a build environment
const isBuildOrSSR = process.env.NODE_ENV === 'production' && typeof window === 'undefined';

// Get the Supabase URL and keys, providing fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Types for membership applications
export interface MembershipApplication {
  id: string
  application_id: string
  created_at: string
  updated_at: string
  processed_at: string | null

  // Personal info
  first_name: string
  last_name: string
  email: string
  phone?: string
  date_of_birth?: string
  address?: string
  postcode?: string

  // Plan info
  selected_plan: string
  plan_name: string
  plan_price: string

  // Bank details (encrypted)
  account_holder_name: string
  sort_code_encrypted: string
  account_number_encrypted: string

  // Patient preferences
  is_existing_patient: string
  preferred_dentist?: string
  dentist_gender_preference?: string
  dentist_name?: string

  // Partner info (for family plans)
  partner_first_name?: string
  partner_last_name?: string
  partner_email?: string
  partner_is_existing_patient?: string
  partner_preferred_dentist?: string
  partner_dentist_gender_preference?: string

  // Staff info
  is_clinic_signup?: boolean
  staff_member_name?: string

  // Family members
  family_members?: any[] // JSONB in database

  // Status and tracking
  status: 'new' | 'processing' | 'completed' | 'error'
  email_sent: boolean
  email_error?: string

  // Audit trail
  ip_address?: string
  user_agent?: string
  submission_source?: string
}

// For client-side operations (public API functions only)
export const supabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey
)

// For server-side operations (admin level access)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

export default supabaseClient
