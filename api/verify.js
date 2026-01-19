import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    const licenseKey = req.query?.licenseKey;

    if (!licenseKey) {
      return res.status(400).json({ valid: false });
    }

    const { data } = await supabase
      .from('licenses')
      .select('license_key')
      .eq('license_key', licenseKey)
      .maybeSingle();

    return res.status(200).json({ valid: !!data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ valid: false });
  }
}
