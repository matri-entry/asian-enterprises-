import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CustomSourcingForm from '@/components/sourcing/CustomSourcingForm';
import { Search, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Custom Industrial Sourcing | Asian Enterprises',
  description: 'Source hard-to-find, obsolete, or specialized industrial equipment and components across India. Supplier-backed procurement by Asian Enterprises.',
};

export default function CustomSourcingPage() {
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
              Custom Sourcing
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
                Specialized Sourcing Network
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Custom Equipment & Material Sourcing
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Need a specific industrial component, non-standard rating, or imported material not shown in our standard catalogue? Share your exact engineering specifications and let our procurement desks locate stock, verify lead time, and secure commercial pricing.
              </p>
            </div>
          </div>
        </div>

        {/* How Custom Sourcing Works */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-slate-900">
            How Custom Sourcing Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong className="text-[#0B2D5B] block font-bold mb-1">1. Requirement Review</strong>
              <span>Our team reviews engineering parameters, voltage/amperage, and physical envelope constraints.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong className="text-[#0B2D5B] block font-bold mb-1">2. Network Search</strong>
              <span>We scan established distributor networks, Tier-1 manufacturer channels, and specialty trade partners across India.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong className="text-[#0B2D5B] block font-bold mb-1">3. Quotation & Dispatch</strong>
              <span>You receive written confirmation of exact brand make, price, tax rate, and expected dispatch timeline.</span>
            </div>
          </div>
        </div>

        {/* Sourcing Form */}
        <CustomSourcingForm />
      </div>
    </div>
  );
}
