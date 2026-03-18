const { createClient } = require('@supabase/supabase-js');
const s = createClient("https://xqqubuvcpwihuhgxupjp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcXVidXZjcHdpaHVoZ3h1cGpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQzMTk5MywiZXhwIjoyMDg5MDA3OTkzfQ.j36CH_lsWjFkKcJBgghPGDC3JDFrpiKdUPaHjRwsaKU");
s.from('purchases').insert({ user_id: 'd9e9db69-42b7-4cbe-b422-794017b2f0a8', series_id: 'mock-eng-1', amount: 0, order_id: '1', payment_id: '1', status: 'success' }).then(res => console.log(JSON.stringify(res, null, 2))).catch(console.error);
