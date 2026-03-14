import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization') || '';
  const [, token] = authHeader.split(' ');

  if (!token) {
    return NextResponse.json({ error: 'Missing bearer token' }, { status: 401 });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
    if (userError || !userData?.user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const uid = userData.user.id;
    const formData = await req.formData();

    const photoFile = formData.get('photoFile') as File | null;
    const updatePayloadStr = formData.get('updatePayload') as string | null;

    if (!photoFile) {
      return NextResponse.json({ error: 'Photo is required' }, { status: 400 });
    }

    if (!updatePayloadStr) {
      return NextResponse.json({ error: 'Profile data is required' }, { status: 400 });
    }

    const updatePayload = JSON.parse(updatePayloadStr);
    
    // Ensure the payload doesn't mutate another user's profile
    if (updatePayload.id && updatePayload.id !== uid) {
       return NextResponse.json({ error: 'Mismatch user ID' }, { status: 403 });
    }
    updatePayload.id = uid;

    const ext = (() => {
      const name = photoFile.name || '';
      const parts = name.split('.');
      const last = (parts[parts.length - 1] || '').toLowerCase();
      if (last === 'png' || last === 'jpg' || last === 'jpeg' || last === 'webp') return last;
      const type = (photoFile.type || '').toLowerCase();
      if (type.includes('png')) return 'png';
      if (type.includes('webp')) return 'webp';
      return 'jpg';
    })();
    const photoPath = `profiles/${uid}/photo.${ext}`;

    const { error: uploadError } = await supabaseAdmin
      .storage
      .from('student-photos')
      .upload(photoPath, photoFile, { upsert: true, contentType: photoFile.type });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    updatePayload.photo_path = photoPath;

    const { error: upsertError } = await supabaseAdmin
      .from('profiles')
      .upsert(updatePayload, { onConflict: 'id' });

    if (upsertError) {
      return NextResponse.json({ error: upsertError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Unknown error' }, { status: 500 });
  }
}
