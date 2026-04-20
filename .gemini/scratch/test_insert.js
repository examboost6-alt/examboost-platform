const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xqqubuvcpwihuhgxupjp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcXVidXZjcHdpaHVoZ3h1cGpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQzMTk5MywiZXhwIjoyMDg5MDA3OTkzfQ.j36CH_lsWjFkKcJBgghPGDC3JDFrpiKdUPaHjRwsaKU';

const supabase = createClient(supabaseUrl, supabaseKey); // USING ANON KEY

async function testInsert() {
    console.log("Testing insert with user_id = null");
    const { data, error } = await supabase.from('page_views').insert({
        path: '/test-anonymous',
        device_type: 'Desktop',
        browser: 'Chrome',
        os: 'Windows',
        city: 'Unknown',
        region: 'Unknown',
        country: 'Unknown',
        user_id: null
    }).select('*');
    
    console.log("Error:", error);
    console.log("Data:", data);
}

testInsert();
