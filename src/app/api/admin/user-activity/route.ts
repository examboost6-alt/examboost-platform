import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID required' }, { status: 400 });
    }

    // 1. Fetch Page Views
    const { data: pageViews } = await supabaseAdmin
      .from('page_views')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(500);

    // 2. Fetch Purchases (joined vaguely with series if possible, else raw)
    const { data: purchases } = await supabaseAdmin
      .from('purchases')
      .select('*, test_series(title, price)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    // 3. Fetch User Tests
    const { data: userTests } = await supabaseAdmin
      .from('user_tests')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    // Fetch all test_series to manually map test_id if the join fails
    const { data: allSeries } = await supabaseAdmin
      .from('test_series')
      .select('id, title');

    // 4. Process Page Views to calculate durations
    const processedViews = [];
    if (pageViews && pageViews.length > 0) {
        // views are sorted desc (newest first). 
        // to calculate duration, we need to look at the next chronological item (which is previous in this array)
        for (let i = 0; i < pageViews.length; i++) {
            const currentView = pageViews[i];
            const currentTimestamp = new Date(currentView.created_at).getTime();
            
            let durationSeconds = 30; // Default 30s
            
            // if there is a chronologically NEXT view (i-1 in the desc array)
            if (i > 0) {
                const nextView = pageViews[i - 1];
                const nextTimestamp = new Date(nextView.created_at).getTime();
                
                const diffSeconds = Math.floor((nextTimestamp - currentTimestamp) / 1000);
                
                // If diff is less than 30 mins (1800s), we consider it same session and track duration. Otherwise default 30s
                if (diffSeconds > 0 && diffSeconds < 1800) {
                    durationSeconds = diffSeconds;
                }
            } else {
                // Latest view overall
                const timeSinceLastView = Math.floor((Date.now() - currentTimestamp) / 1000);
                if (timeSinceLastView < 300) {
                    // actively viewing right now
                    durationSeconds = -1; // special flag for "Active Now"
                }
            }
            
            processedViews.push({
                ...currentView,
                durationSeconds
            });
        }
    }

    return NextResponse.json({
        success: true,
        pageViews: processedViews,
        purchases: purchases || [],
        userTests: userTests || [],
        allSeries: allSeries || []
    });

  } catch (error: any) {
    console.error('User Activity API error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
