import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// GET: Fetch all demo accounts
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({
      page: 1,
      perPage: 1000
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message });
    }

    // Identify demo users: either is_demo flag, or "demo" in email, or "Demo" in name
    const allUsers = data.users;
    let demoUsers = allUsers.filter(u => 
      u.user_metadata?.is_demo === true || 
      (u.email && u.email.toLowerCase().includes('demo')) ||
      (u.user_metadata?.first_name && u.user_metadata.first_name.toLowerCase().includes('demo'))
    );

    // Fetch their purchase stats to see if they have free access
    const userIds = demoUsers.map(u => u.id);
    
    // Check purchases where amount is 0
    let hasAccessMap: Record<string, boolean> = {};
    if (userIds.length > 0) {
       const { data: purchases } = await supabaseAdmin
         .from('purchases')
         .select('user_id')
         .in('user_id', userIds)
         .eq('amount', 0);
       
       if (purchases) {
         purchases.forEach(p => {
           hasAccessMap[p.user_id] = true;
         });
       }
    }

    const formattedUsers = demoUsers.map(u => ({
      id: u.id,
      email: u.email,
      name: u.user_metadata?.first_name || 'Demo User',
      createdAt: u.created_at,
      hasFreeAccess: u.user_metadata?.is_demo === true || !!hasAccessMap[u.id]
    }));

    return NextResponse.json({ success: true, users: formattedUsers });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// DELETE: Delete a demo user completely
export async function DELETE(req: Request) {
  try {
     const { searchParams } = new URL(req.url);
     const userId = searchParams.get('userId');

     if (!userId) {
       return NextResponse.json({ success: false, error: 'userId required' });
     }

     // Delete associated records first (in case ON DELETE CASCADE is missing)
     await supabaseAdmin.from('purchases').delete().eq('user_id', userId);
     await supabaseAdmin.from('user_tests').delete().eq('user_id', userId);
     await supabaseAdmin.from('profiles').delete().eq('id', userId);

     // Supabase auth.admin.deleteUser deletes the user from auth
     const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);
     if (error) {
       return NextResponse.json({ success: false, error: error.message });
     }

     return NextResponse.json({ success: true, message: 'User deleted successfully' });
  } catch (error: any) {
     return NextResponse.json({ success: false, error: error.message });
  }
}

// PATCH: Revoke Free Access
export async function PATCH(req: Request) {
  try {
     const { userId } = await req.json();
     if (!userId) {
        return NextResponse.json({ success: false, error: 'userId required' });
     }

     // Revoke only free access (amount = 0)
     const { error } = await supabaseAdmin
       .from('purchases')
       .delete()
       .eq('user_id', userId)
       .eq('amount', 0);

     if (error) {
       return NextResponse.json({ success: false, error: error.message });
     }

     return NextResponse.json({ success: true, message: 'Free access revoked successfully' });
  } catch (error: any) {
     return NextResponse.json({ success: false, error: error.message });
  }
}
