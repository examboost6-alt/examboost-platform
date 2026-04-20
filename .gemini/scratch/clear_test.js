const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xqqubuvcpwihuhgxupjp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcXVidXZjcHdpaHVoZ3h1cGpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQzMTk5MywiZXhwIjoyMDg5MDA3OTkzfQ.j36CH_lsWjFkKcJBgghPGDC3JDFrpiKdUPaHjRwsaKU';

const supabase = createClient(supabaseUrl, supabaseKey); // USING ANON KEY

async function clearTest() {
    console.log("Removing the manual test record generated via bot...");
    const { data, error } = await supabase.from('page_views').delete().eq('path', '/test-anonymous');
    console.log("Done.");
}

clearTest();
