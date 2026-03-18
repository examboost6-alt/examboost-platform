import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

async function run() {
  const { data: users, error: ue } = await supabaseAdmin.auth.admin.listUsers();
  if (ue) { console.error(ue); return; }
  
  const demoUsr = users.users.find((u: any) => u.email === 'demo@examboost.in');
  if (!demoUsr) { console.log('not found'); return; }
  
  console.log('Found demo:', demoUsr.id);
  const { data: p, error } = await supabaseAdmin.from('purchases').select('*').eq('user_id', demoUsr.id);
  console.log('Purchases:', p);
}
run();
