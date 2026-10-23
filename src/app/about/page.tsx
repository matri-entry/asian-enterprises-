import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/data/company';
import { 
  Building2, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Layers, 
  FileCheck, 
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Asian Enterprises | B2B Industrial Procurement & Sourcing',
  description: 'Learn about Asian Enterprises, a dedicated B2B industrial trading and supply partner serving manufacturing plants, panel builders, and contractors across India.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Title */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              About Us
            </span>
          </nav>

          <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
            Corporate Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About ASIAN ENTERPRISES
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            A B2B industrial trading, sourcing, and procurement partner dedicated to simplifying material acquisition for manufacturing plants, infrastructure projects, and engineering contractors across India.
          </p>
        </div>

        {/* Core Sourcing Model */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Our B2B Industrial Sourcing Model
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Structured single-window procurement connecting buyers with established supplier networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong>ASIAN ENTERPRISES</strong> operates as an agile industrial trading enterprise. We specialize in aggregating diverse industrial requirements—ranging from engineered electrical distribution panels and high-voltage power transmission cables to switchgear, testing instruments, fasteners, and workshop safety supplies.
              </p>
              <p>
                Industrial buyers frequently encounter delays and operational friction dealing with dozens of separate single-category suppliers. Asian Enterprises solves this challenge through a <strong>single-window procurement model</strong>: clients submit their project Bill of Materials (BOM), and our commercial desk executes the vendor coordination, price negotiation, batch consolidation, and dispatch logistics.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">
                  Inventory & Sourcing Structure:
                </span>
                <p className="text-[11px] text-slate-500">
                  • <strong>Project-Ready Fast-Moving Stock:</strong> Maintained for critical, high-frequency electrical consumables and safety products for rapid dispatch.<br />
                  • <strong>Supplier-Backed Procurement:</strong> Sourced through established manufacturer, authorized distributor, and stockist connections across India for specialized and high-volume project orders.
                </p>
              </div>

              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 space-y-1">
                <span className="font-bold text-[#0B2D5B] block text-xs">
                  Official Transition Notice:
                </span>
                <p className="text-[11px] text-slate-600">
                  The business previously conducted trade operations under the name Krish Enterprise. All ongoing operations, customer relationships, supplier coordination, and trade engagements are now consolidated under the unified brand <strong>ASIAN ENTERPRISES</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Operations & Geographic Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bengaluru HQ */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0B2D5B] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#0B2D5B]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Main Operations (Bengaluru)
                </h3>
                <span className="text-[11px] text-slate-500">Commercial Operations & Central Procurement</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <p>
                <strong>Facility Address:</strong><br />
                {COMPANY.mainOperations.fullAddress}
              </p>
              <p>
                <strong>GSTIN Registration:</strong><br />
                <span className="font-mono font-bold text-slate-900">{COMPANY.gstin}</span>
              </p>
              <p>
                <strong>Primary Roles:</strong><br />
                Central quotation desk, vendor management, quality verification, and dispatch coordination for Southern and Western industrial sectors.
              </p>
            </div>
          </div>

          {/* Jaipur Regional Desk */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F05A28] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#F05A28]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Regional Sales Office (Jaipur)
                </h3>
                <span className="text-[11px] text-slate-500">Regional Client Coordination</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
              <p>
                <strong>Location:</strong><br />
                Jaipur, Rajasthan
              </p>
              <p>
                <strong>Coverage Focus:</strong><br />
                Serving client facilities, EPC contractors, and manufacturing estates throughout Rajasthan, Delhi-NCR, Haryana, and Gujarat industrial corridors.
              </p>
              <p>
                <strong>Primary Roles:</strong><br />
                Regional customer enquiry intake, project site coordination, and commercial follow-ups.
              </p>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
            Our Commercial Commitments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5">
              <strong className="text-slate-900 block font-bold">1. Verified Quotations</strong>
              <p className="leading-relaxed">
                We believe in transparent pricing. All unit costs, delivery lead times, and freight terms are verified with suppliers before generating written quotes.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-slate-900 block font-bold">2. Compliance & Invoicing</strong>
              <p className="leading-relaxed">
                Every dispatch is backed by clean 100% compliant GST tax invoices, valid E-Way bills, and manufacturer test certificates where required.
              </p>
            </div>

            <div className="space-y-1.5">
              <strong className="text-slate-900 block font-bold">3. Dependable Fulfilment</strong>
              <p className="leading-relaxed">
                We coordinate directly with reputed logistics carriers to ensure products reach factory gates and project sites safely across India.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0B2D5B] rounded-xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Partner with Asian Enterprises for Your Industrial Sourcing
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Have an upcoming plant shutdown, expansion, or ongoing project schedule? Let our desk quote your requirement.
            </p>
          </div>
          <Link
            href="/rfq"
            className="px-6 py-3 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 shadow-xs"
          >
            Submit an RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
