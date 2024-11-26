import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vwrasyfmmzshduhogion.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3cmFzeWZtbXpzaGR1aG9naW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1NzAyOTgsImV4cCI6MjA0ODE0NjI5OH0.kKKxf7czMDt_S9J9j0bX-QtwEkktjvWz7OVdqKEgLtk"

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)