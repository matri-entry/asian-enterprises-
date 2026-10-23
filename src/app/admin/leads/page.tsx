import React from 'react';
import type { Metadata } from 'next';
import LeadsDashboardClient from '@/components/admin/LeadsDashboardClient';
import Link from 'next/link';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Internal Sales Desk & Leads | Asian Enterprises',
  description: 'Internal operations dashboard for commercial RFQ management and order pipeline.',
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminLeadsPage() {
  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Sales Desk Leads</span>
          </nav>
          <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Restricted Internal Access</span>
          </span>
        </div>

        <LeadsDashboardClient />
      </div>
    </div>
  );
}
