import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { licenseKey } = req.body;

  if (!licenseKey) {
    return res.status(400).json({ valid: false, error: 'License key required' });
  }

  const { data, error } = await supabase
    .from('licenses')
    .select('id')
    .eq('license_key', licenseKey)
    .eq('status', 'active')
    .single();

  if (error || !data) {
    return res.status(401).json({ valid: false });
  }

  return res.status(200).json({ valid: true });
}
