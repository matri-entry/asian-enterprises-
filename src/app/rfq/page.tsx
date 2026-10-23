import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import RFQForm from '@/components/rfq/RFQForm';
import { FileText, ShieldCheck, Clock, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Quote (RFQ) | Asian Enterprises Industrial Procurement',
  description: 'Submit an online Request for Quotation for industrial electricals, power cables, switchgear, panel accessories, and hardware. Fast quotations across India.',
};

interface RFQPageProps {
  searchParams: Promise<{
    category?: string;
    product?: string;
    qty?: string;
    pincode?: string;
  }>;
}

async function RFQFormWrapper({ searchParams }: { searchParams: Promise<{ category?: string; product?: string; qty?: string; pincode?: string }> }) {
  const params = await searchParams;
  return (
    <RFQForm
      initialCategory={params.category}
      initialProductName={params.product}
    />
  );
}

export default function RFQPage({ searchParams }: RFQPageProps) {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Request a Quote
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
                Multi-Product Procurement Portal
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Request for Quotation (RFQ)
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Add one or multiple industrial products, quantities, and delivery specifications. Our commercial team in Bengaluru & Jaipur will review requirements and generate a tailored quotation.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/boq-upload"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4 text-[#F05A28]" />
                <span>Upload Excel / PDF BOQ</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Value Callout Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <strong className="text-slate-900 block font-bold">Transparent Sourcing</strong>
              <span className="text-slate-500 text-[11px]">Itemized quotes with clear freight & GST</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Clock className="w-8 h-8 text-[#0B2D5B] shrink-0" />
            <div>
              <strong className="text-slate-900 block font-bold">Fast Review</strong>
              <span className="text-slate-500 text-[11px]">Reviewed promptly by procurement engineers</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-[#F05A28] shrink-0" />
            <div>
              <strong className="text-slate-900 block font-bold">Pan-India Dispatches</strong>
              <span className="text-slate-500 text-[11px]">Bengaluru HQ & Jaipur regional desk</span>
            </div>
          </div>
        </div>

        {/* The Multi-Line Item Form wrapped in Suspense */}
        <Suspense fallback={
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
            Loading Quotation Form...
          </div>
        }>
          <RFQFormWrapper searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
