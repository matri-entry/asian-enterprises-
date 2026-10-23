import React from 'react';
import Link from 'next/link';
import { Search, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function CustomSourcingSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-[#0B2D5B] to-slate-900 rounded-2xl p-8 sm:p-12 border border-blue-900 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F05A28]/20 border border-[#F05A28]/40 text-[#F05A28] text-xs font-bold uppercase tracking-wider">
                <Search className="w-3.5 h-3.5" />
                <span>Specialized Sourcing Desk</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Looking for a Product Not Displayed in Our Catalogue?
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Our catalog represents core industrial product families, but our sourcing network spans hundreds of manufacturers, importers, and authorized trade channels. If your project bill contains rare switchgear ratings, obsolete components, or specialized materials, let our procurement desk locate them.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] shrink-0" />
                  <span>Obsolete / Hard-to-find parts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] shrink-0" />
                  <span>Non-standard dimensions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F05A28] shrink-0" />
                  <span>Multi-brand consolidate quotes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                href="/custom-sourcing"
                className="w-full text-center py-3.5 px-6 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Submit Custom Sourcing Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/rfq"
                className="w-full text-center py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-md border border-white/20 transition-colors"
              >
                Standard Multi-Product RFQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
