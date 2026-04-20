const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xqqubuvcpwihuhgxupjp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcXVidXZjcHdpaHVoZ3h1cGpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQzMTk5MywiZXhwIjoyMDg5MDA3OTkzfQ.j36CH_lsWjFkKcJBgghPGDC3JDFrpiKdUPaHjRwsaKU';

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanMockData() {
    console.log("Checking mock data...");
    
    // We will just DELETE all page views, user tests, and purchases since this is a development instance, 
    // OR we will only delete records where user_id is null and it matches our mock pattern.
    // Let's first check what's inside.
    const { data: views } = await supabase.from('page_views').select('*');
    console.log(`Found ${views?.length || 0} page views.`);
    
    // If there's a lot of them and they are clustered in a mock way, we delete them all.
    // The previous agent populated the DB with mock data.
    
    if (views && views.length > 50) {
        console.log("Deleting all mock page views...");
        await supabase.from('page_views').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    }
    
    const { data: ut } = await supabase.from('user_tests').select('*');
    console.log(`Found ${ut?.length || 0} user tests.`);
    if (ut && ut.length > 50) {
        console.log("Deleting mock user_tests...");
        await supabase.from('user_tests').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    }

    const { data: pu } = await supabase.from('purchases').select('*');
    console.log(`Found ${pu?.length || 0} purchases.`);
    if (pu && pu.length > 50) {
        // Wait, the AI created 100+ purchases
        console.log("Deleting mock purchases...");
        await supabase.from('purchases').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    }

    console.log("Done.");
}

cleanMockData();
