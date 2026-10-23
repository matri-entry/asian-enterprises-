import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import BOQUploadForm from '@/components/boq/BOQUploadForm';
import { FileSpreadsheet, Lock, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Bulk BOQ & BOM Upload | Asian Enterprises Industrial Procurement',
  description: 'Upload your turnkey electrical Bill of Quantities (BOQ), tender schedule, or material estimate for competitive multi-category industrial pricing.',
};

export default function BOQUploadPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Bulk BOQ Upload
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
                Project & Infrastructure Sourcing
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Submit Project Bill of Quantities (BOQ)
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Save dozens of vendor inquiries by submitting your complete project material list. Asian Enterprises aggregates quotes across switchgear, HT/LT cables, earthing, lighting, and hardware into one single commercial proposal.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Process Guarantees */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#0B2D5B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-bold">Confidential Storage</strong>
              <span>Files are stored privately in non-public folders and never shared publicly.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileSpreadsheet className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-bold">Standard Formats</strong>
              <span>Accepts Excel (.xlsx, .xls), PDF tender schedules, and CSV files up to 10 MB.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#F05A28] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block font-bold">Consolidated Pricing</strong>
              <span>Single tax invoice and scheduled dispatches matching site milestones.</span>
            </div>
          </div>
        </div>

        {/* Upload Form */}
        <BOQUploadForm />
      </div>
    </div>
  );
}
