require('dotenv').config({path: '.env.local'});
const { createClient } = require('@supabase/supabase-js');
const sup = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
sup.from('purchases').select('*').limit(3).then((res)=>console.log(res));
