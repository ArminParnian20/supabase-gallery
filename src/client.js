import { createClient } from "@supabase/supabase-js";

export const supabase=createClient(
    "https://vnbyjoiqnxvxjhlqytqx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYnlqb2lxbnh2eGpobHF5dHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5NDY5NDQsImV4cCI6MTk2MDUyMjk0NH0.gxiCdA3mWteIzFAk0ijIKrBXWnA_MtdqH3qbWFtRMck"
)