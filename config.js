const SUPABASE_URL = "https://vvhpywkvbsyguflqigbg.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "sb_publishable_ygsnLIW43XObzdZRlcnIFg___D0Yz9O";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
