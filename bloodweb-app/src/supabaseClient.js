import { createClient } from "@supabase/supabase-js";

// Ton projet Supabase (la clé "publishable" est publique, c'est normal qu'elle soit ici).
// Tu peux aussi les surcharger via les variables d'environnement Vercel.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://koncrmrbvviajgnzkznv.supabase.co";
const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_Ncw7tXOhgDeLIOo2nLHRKQ_GLqjYGdb";

export const supabase = createClient(supabaseUrl, supabaseKey);
