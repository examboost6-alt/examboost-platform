import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

export async function POST(req: Request) {
  try {
    const { deviceId, userId, path, userAgent } = await req.json();

    // Determine IP address reliably from Vercel headers
    let ip = req.headers.get("x-forwarded-for")?.split(',')[0] || 
             req.headers.get('x-real-ip') || 
             '127.0.0.1';
             
    // Since localhost gives loopback, mock a random IP in dev mode to test features
    if (ip === "::1" || ip === '127.0.0.1' || ip.startsWith('192.168.')) {
        const fakeIps = ['103.111.96.0', '106.213.255.0', '103.55.94.0', '49.43.149.0', '157.48.255.0']; // Some fake Indian IPs test
        ip = fakeIps[Math.floor(Math.random() * fakeIps.length)];
    }

    let city = 'Unknown';
    let region = 'Unknown';
    let country = 'Unknown';

    // Fetch Geo Location from free API
    try {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city`);
        const geoData = await geoResponse.json();
        
        if (geoData.status === 'success') {
            city = geoData.city || 'Unknown';
            region = geoData.regionName || 'Unknown';
            country = geoData.country || 'Unknown';
        }
    } catch (e) {
        console.error("GeoIP Fetch failed", e);
    }

    // Determine basic mobile / desktop string
    const isMobile = userAgent ? /mobile/i.test(userAgent) : false;
    const deviceType = isMobile ? 'Mobile' : 'Desktop';

    // Check if device ID already visited today (to prevent duplicate hits on page reloads, 
    // unless you want absolute raw pageviews). Let's just track everything for a high-intensity dashboard, 
    // or limit 1 per day.
    
    // For pure page view logs, we fire and forget:
    const { error } = await supabaseAdmin.from('site_traffic').insert({
        device_id: deviceId || 'unknown',
        user_id: userId || null, // authenticated or null
        ip_address: ip,
        city: city,
        region: region,
        country: country,
        path: path || '/',
        device_type: deviceType,
        user_agent: userAgent?.substring(0, 200) || null
    });

    if (error) {
       console.error("Supabase insert error for site_traffic", error);
       return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Analytics failure", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
