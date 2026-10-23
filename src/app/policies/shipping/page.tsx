import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { Truck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Asian Enterprises B2B Pan-India Logistics',
  description: 'Pan-India logistics, freight terms, transit insurance, and dispatch procedures for industrial materials supplied by Asian Enterprises.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Shipping & Delivery Policy</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900">Shipping & Delivery Policy (B2B Industrial)</h1>
          <p className="text-xs text-slate-500 mt-1">Pan-India Freight Logistics &bull; Draft for Company Review</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Pan-India Delivery Coverage</h2>
            <p>
              Asian Enterprises arranges dispatches to industrial sites, SEZ zones, plant facilities, and project warehouses across all states and Union Territories in India through vetted third-party logistics (3PL) partners and dedicated freight carriers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Freight Terms & Pricing</h2>
            <p>
              Shipments may be quoted on either:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Ex-Works / Ex-Godown:</strong> Customer arranges own transport pickup from our Bengaluru operations or designated supplier hub.</li>
              <li><strong>FOR Destination (Freight Paid / To-Pay):</strong> Transport arranged by Asian Enterprises with freight billed on tax invoice or paid by customer upon site delivery as per quotation agreement.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. Delivery Timelines & Lead Times</h2>
            <p>
              Because industrial supplies involve customized panels, drum cuts for cables, and multi-vendor sourcing, exact delivery dates are contingent on supplier manufacturing cycles and carrier transit durations. Expected dispatch lead times are stated in writing on each commercial quotation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Transit Insurance & Risk Transfer</h2>
            <p>
              Unless transit insurance is expressly included in the quotation, risk of transit damage passes to the buyer upon handover to the commercial carrier. We recommend transit insurance coverage for high-value switchgear, transformers, and long-run cables.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">5. Unloading & Site Gate Inspection</h2>
            <p>
              Consignments are delivered to the recipient&rsquo;s site gate. Offloading from transport vehicles, internal crane handling, and site movement are the responsibility of the consignee unless specialized unloading services were contracted in advance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
