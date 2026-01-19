import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req, res) {
  const { licenseKey } = req.body;

  const { data, error } = await supabase
    .from('licenses')
    .select('*')
    .eq('license_key', licenseKey)
    .single();

  if (data) {
    return res.status(200).json({ valid: true });
  } else {
    return res.status(401).json({ valid: false });
  }
}
