import { NextRequest, NextResponse } from 'next/server';
import { getAllLeads, updateLeadStatus } from '@/lib/storage';
import { LeadStatus } from '@/lib/types';

// Simple token authentication for sales desk internal dashboard
const ADMIN_KEY = process.env.ADMIN_SECRET_KEY || 'asian2026';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const key = url.searchParams.get('key') || req.headers.get('x-admin-key');

  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized access. Valid sales desk passkey required.' }, { status: 401 });
  }

  const leads = getAllLeads();
  return NextResponse.json({ success: true, count: leads.length, leads });
}

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const key = url.searchParams.get('key') || req.headers.get('x-admin-key');

  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    const { id, status, note } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: 'Lead ID and new status are required.' }, { status: 400 });
    }

    const updated = updateLeadStatus(id, status as LeadStatus, note);
    if (!updated) {
      return NextResponse.json({ error: 'Lead not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (error: any) {
    return NextResponse.json({ error: 'Server error updating lead status.' }, { status: 500 });
  }
}
