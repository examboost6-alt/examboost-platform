import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ error: 'server_not_configured' }, { status: 500 });
  }

  const authHeader = req.headers.get('authorization') || '';
  const [, token] = authHeader.split(' ');

  if (!token) {
    return NextResponse.json({ error: 'missing_bearer_token' }, { status: 401 });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
    if (userError || !userData.user) {
      return NextResponse.json({ error: 'invalid_token' }, { status: 401 });
    }

    const requesterId = userData.user.id;

    const { data: requesterProfile, error: roleError } = await supabaseAdmin
      .from('profiles')
      .select('role')
      .eq('id', requesterId)
      .maybeSingle();

    if (roleError || (requesterProfile as any)?.role !== 'admin') {
      return NextResponse.json({ error: 'forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const studentId = body?.studentId as string | undefined;

    if (!studentId) {
      return NextResponse.json({ error: 'missing_student_id' }, { status: 400 });
    }

    const { data: studentProfile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('photo_path')
      .eq('id', studentId)
      .maybeSingle();

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 400 });
    }

    const photoPath = (studentProfile as any)?.photo_path as string | null | undefined;
    if (!photoPath) {
      return NextResponse.json({ error: 'photo_not_found' }, { status: 404 });
    }

    const { data: signed, error: signedError } = await supabaseAdmin
      .storage
      .from('student-photos')
      .createSignedUrl(photoPath, 60 * 5);

    if (signedError || !signed?.signedUrl) {
      return NextResponse.json({ error: signedError?.message || 'signed_url_failed' }, { status: 500 });
    }

    return NextResponse.json({ signedUrl: signed.signedUrl });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'unknown_error' }, { status: 500 });
  }
}
