import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://udyltmkwhmizfucdnjip.supabase.co";

const supabaseKey =
  "sb_publishable_oZL8ssYjWVev775qW3HUEQ_jkPCHFKI";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );
  console.log("SUPABASE CONECTADO");