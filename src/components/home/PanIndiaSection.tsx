import React from 'react';
import Link from 'next/link';
import { Truck, MapPin, Building2, Shield, ArrowRight, Check } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function PanIndiaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Approach */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#102B46] text-xs font-bold uppercase rounded tracking-wider">
              <Truck className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Pan-India Logistics & Sourcing Network</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Supplying Industrial Clusters Across India
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Gurudev Enterprise operates central procurement and commercial distribution from <strong>Bengaluru, Karnataka (Bommanahalli)</strong>. We coordinate with verified manufacturers, master distributors, and reliable freight carriers to supply project sites and manufacturing facilities across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 text-xs block mb-1">
                  Main Operations (Bengaluru)
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Central office, procurement coordination, vendor relationships, and dispatch operations.
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-400">
                  Bommanahalli, Bengaluru - 560068
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 text-xs block mb-1">
                  Pan-India Supply & Freight
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Coordinated road freight, PTL/FTL logistics, and express parcel dispatch to project sites nationwide.
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-400">
                  Pan-India Dispatch Network
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600 pt-2">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Freight Terms:</strong> Transport charges, transit insurance, and delivery schedules are agreed upfront in your quotation.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Documentation:</strong> E-Way bills, tax invoices with GST credit pass-through, and manufacturer test certificates provided where applicable.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/rfq"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102B46] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Request Project Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Industrial Regions Served */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#102B46] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Primary Industrial Zones
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Serving manufacturing hubs, SEZs, power projects, and contractor sites across major economic corridors:
            </p>

            <div className="space-y-4 text-xs">
              <div className="border-l-2 border-[#F28C28] pl-3">
                <strong className="text-white block font-semibold">
                  Southern Zone
                </strong>
                <span className="text-slate-300 text-[11px]">
                  Bengaluru, Peenya, Hosur, Chennai, Sri City, Hyderabad, Coimbatore
                </span>
              </div>

              <div className="border-l-2 border-[#F28C28] pl-3">
                <strong className="text-white block font-semibold">
                  Western Zone
                </strong>
                <span className="text-slate-300 text-[11px]">
                  Ahmedabad, Vadodara, Surat, Mumbai, Pune, Pimpri-Chinchwad, Jaipur
                </span>
              </div>

              <div className="border-l-2 border-[#F28C28] pl-3">
                <strong className="text-white block font-semibold">
                  Northern Zone
                </strong>
                <span className="text-slate-300 text-[11px]">
                  Delhi-NCR, Gurugram, Manesar, Faridabad, Neemrana, Bhiwadi, Baddi
                </span>
              </div>

              <div className="border-l-2 border-[#F28C28] pl-3">
                <strong className="text-white block font-semibold">
                  Eastern & Central Zones
                </strong>
                <span className="text-slate-300 text-[11px]">
                  Indore, Pithampur, Raipur, Jamshedpur, Kolkata, Angul
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-900/60 text-[11px] text-slate-400">
              * Delivery timelines depend on product category, batch volumes, and destination carrier transit schedules. Quotations specify expected dispatch timeframes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
