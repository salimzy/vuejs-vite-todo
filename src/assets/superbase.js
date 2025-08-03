import { createClient } from '@supabase/supabase-js'

// Ensure these values are correct in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Add validation
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided in .env file')
}

if (!supabaseUrl.startsWith('http')) {
  throw new Error('Supabase URL must start with https://')
}

export const supabase = createClient(supabaseUrl, supabaseKey)