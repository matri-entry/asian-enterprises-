import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/data/company';
import { CATEGORIES } from '@/data/categories';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  FileCheck, 
  ExternalLink,
  ArrowRight,
  Clock,
  Building2,
  Lock
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B2D5B] text-slate-300 text-sm border-t border-slate-800">
      {/* Upper Pre-Footer Callout */}
      <div className="bg-[#082142] py-8 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Need a tailored industrial quotation or sourcing proposal?
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Submit your Bill of Quantities (BOQ) or single-item enquiry. Our team reviews project specifications with suppliers to deliver verified commercial pricing.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/boq-upload"
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-md border border-slate-600 transition-colors"
              >
                Upload BOQ File
              </Link>
              <Link
                href="/rfq"
                className="px-5 py-2.5 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wide rounded-md transition-colors shadow-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Corporate Profile */}
          <div className="lg:col-span-2">
            <div className="bg-white p-3.5 rounded-md inline-block mb-4">
              <div className="relative h-10 w-44">
                <Image 
                  src="/images/logo.png" 
                  alt="Asian Enterprises Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mb-4">
              <strong className="text-white">ASIAN ENTERPRISES</strong> is a premier B2B industrial trading, sourcing, and procurement company supplying electrical infrastructure, automation panels, cables, safety gear, and industrial hardware to factories, panel builders, OEMs, and EPC contractors across India.
            </p>

            <div className="bg-blue-950/60 p-3.5 rounded border border-blue-900/60 text-xs space-y-1.5 max-w-sm">
              <div className="text-slate-200 font-medium flex items-center justify-between">
                <span>Verified GSTIN:</span>
                <span className="font-mono font-bold text-white bg-blue-900/70 px-2 py-0.5 rounded text-[11px]">
                  {COMPANY.gstin}
                </span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Business model: Supplier-backed procurement & direct industrial supply.
              </p>
            </div>
          </div>

          {/* Col 2: Core Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-800 pb-2">
              Key Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/categories/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/products" 
                  className="text-[#F05A28] hover:text-orange-400 font-semibold inline-block pt-1"
                >
                  View All 12 Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industrial Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-800 pb-2">
              Procurement Desk
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/rfq" className="hover:text-white transition-colors">
                  Request a Quotation (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/boq-upload" className="hover:text-white transition-colors">
                  Project BOQ / BOM Upload
                </Link>
              </li>
              <li>
                <Link href="/custom-sourcing" className="hover:text-white transition-colors">
                  Custom Equipment Sourcing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Sourcing Model
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Customer & Sales Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/admin/leads" 
                  className="text-slate-400 hover:text-slate-200 text-[11px] flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>Internal Sales Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Locations & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-blue-800 pb-2">
              Verified Offices
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="font-bold text-white flex items-center gap-1 text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-[#F05A28]" />
                  Main Operations (Bengaluru)
                </span>
                <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                  {COMPANY.mainOperations.fullAddress}
                </p>
              </div>

              <div>
                <span className="font-bold text-white flex items-center gap-1 text-[11px]">
                  <Building2 className="w-3.5 h-3.5 text-[#F05A28]" />
                  Regional Sales (Jaipur)
                </span>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Jaipur, Rajasthan &bull; Serving Northern/Western corridors
                </p>
              </div>

              <div className="pt-2 border-t border-blue-900/60 space-y-1.5">
                <a 
                  href={`tel:${COMPANY.contact.primaryPhone}`} 
                  className="flex items-center gap-2 text-white hover:text-[#F05A28] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F05A28]" />
                  <span>{COMPANY.contact.primaryPhoneDisplay}</span>
                </a>
                <a 
                  href={`tel:${COMPANY.contact.secondaryPhone}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-white text-[11px]"
                >
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span>{COMPANY.contact.secondaryPhoneDisplay}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY.contact.email}`} 
                  className="flex items-center gap-2 text-slate-300 hover:text-white text-[11px]"
                >
                  <Mail className="w-3 h-3 text-[#F05A28]" />
                  <span>{COMPANY.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pan-India Supply Notice */}
        <div className="mt-10 pt-6 border-t border-blue-900/60 bg-blue-950/30 p-4 rounded-md">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Pan-India Industrial Sourcing & Logistics:</strong> Asian Enterprises coordinates supply, freight transit, and order dispatch across all major industrial clusters in India. Commercial pricing, brand availability, freight terms, and delivery schedules are confirmed through written quotation prior to order finalization.
          </p>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-8 pt-6 border-t border-blue-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/policies/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/policies/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/policies/shipping" className="hover:text-slate-200 transition-colors">
              Shipping & Freight Policy
            </Link>
            <span>&bull;</span>
            <Link href="/policies/returns" className="hover:text-slate-200 transition-colors">
              Returns & Claims
            </Link>
            <span>&bull;</span>
            <Link href="/policies/disclaimer" className="hover:text-slate-200 transition-colors">
              Disclaimer
            </Link>
          </div>

          <p className="text-[11px] text-slate-500">
            &copy; 2026 ASIAN ENTERPRISES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
