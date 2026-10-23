import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Building2, 
  Truck, 
  CheckCircle2,
  Layers,
  Wrench
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-[#0B2D5B] to-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Subtle industrial grid background */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse" />
              <span>B2B Industrial Trading & Sourcing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Your Trusted Partner for Industrial Procurement
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Electrical products, industrial components and multi-category sourcing for businesses across India. Share your requirement and receive a tailored quotation from our team.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/rfq"
                className="px-6 py-3.5 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-sm uppercase tracking-wider rounded-md shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-md border border-white/20 transition-all backdrop-blur-xs flex items-center gap-2"
              >
                <span>Explore Products</span>
              </Link>

              <Link
                href="/boq-upload"
                className="px-6 py-3.5 text-blue-200 hover:text-white font-semibold text-sm transition-colors flex items-center gap-2 underline underline-offset-4"
              >
                <FileText className="w-4 h-4 text-[#F05A28]" />
                <span>Upload Bulk BOQ</span>
              </Link>
            </div>

            {/* Verified Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-blue-800/60 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-white block">Single Window</span>
                <span className="text-slate-300 text-[11px] block">Switchgear to Hardware</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Supplier Network</span>
                <span className="text-slate-300 text-[11px] block">Multi-category sourcing</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Pan-India Reach</span>
                <span className="text-slate-300 text-[11px] block">Bengaluru HQ & Jaipur desk</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-white block">Clear Quotations</span>
                <span className="text-slate-300 text-[11px] block">Transparent itemized pricing</span>
              </div>
            </div>
          </div>

          {/* Quick RFQ Starter Box on Hero */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-slate-800 border border-slate-100">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2D5B] bg-blue-50 px-2.5 py-1 rounded">
                    Quick Industrial Enquiry
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Pan-India Sourcing</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mt-2">
                  Have an urgent requirement or Bill of Quantities?
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us what you need and our procurement team will contact you.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-[#0B2D5B] block mb-1">
                    Multi-Product RFQ Portal
                  </span>
                  <p className="text-xs text-slate-600 mb-2.5">
                    Specify line items, quantities, and preferred brands in our structured quote form.
                  </p>
                  <Link
                    href="/rfq"
                    className="w-full py-2 bg-[#0B2D5B] hover:bg-blue-900 text-white text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Open Multi-Item RFQ Builder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-3.5 rounded-lg bg-orange-50/60 border border-orange-200/80">
                  <span className="text-xs font-bold text-[#F05A28] block mb-1">
                    Project BOQ / Excel Upload
                  </span>
                  <p className="text-xs text-slate-600 mb-2.5">
                    Upload your project schedule, tender list, or Excel BOM file up to 10 MB.
                  </p>
                  <Link
                    href="/boq-upload"
                    className="w-full py-2 bg-[#F05A28] hover:bg-[#D94819] text-white text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Upload Project File (PDF / XLSX)</span>
                  </Link>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-400">
                    Need immediate technical assistance? Call <a href={`tel:${COMPANY.contact.primaryPhone}`} className="text-[#0B2D5B] font-bold hover:underline">{COMPANY.contact.primaryPhoneDisplay}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
