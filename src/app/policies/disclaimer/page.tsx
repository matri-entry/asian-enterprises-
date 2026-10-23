import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Disclaimer | Asian Enterprises Industrial Sourcing',
  description: 'Commercial disclaimer regarding technical specifications, brand availability, and quotation terms for Asian Enterprises.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Disclaimer</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900">Commercial & Technical Disclaimer</h1>
          <p className="text-xs text-slate-500 mt-1">Official Trade Statement &bull; ASIAN ENTERPRISES</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Technical Specifications & Dimensions</h2>
            <p>
              Information, dimensions, and specifications presented on this website are compiled from manufacturer catalogues, standard trade reference sheets, and verified engineering handbooks. While Asian Enterprises endeavors to maintain accuracy, manufacturers continuously refine product designs and ratings. Buyers and project consultants must verify critical ratings, breaking capacities, and envelope dimensions through official submission drawings and single-line diagrams before final order sign-off.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Trademarks, Brands & Brand Availability</h2>
            <p>
              All product brand names, registered trademarks, logos, and manufacturer designations referenced on this site belong to their respective proprietary holders. References to brands (e.g. L&amp;T, Schneider, Polycab, Havells, Siemens, ABB, etc.) indicate industrial procurement capabilities through authorized distribution channels and do not imply exclusive OEM authorization unless expressly noted in a commercial tender agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. Non-Binding Website Quotations</h2>
            <p>
              All website catalogue displays, product listings, and RFQ forms are invitations to enquire. A legally enforceable contract comes into existence only upon mutual execution of a formal Purchase Order and written order confirmation issued by the authorized signatories of Asian Enterprises.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. No Invented Endorsements</h2>
            <p>
              Asian Enterprises adheres strictly to honest B2B trade communication. We do not display fabricated consumer reviews, artificial stock counts, or speculative delivery guarantees. Availability and pricing are confirmed in real-time through verified supplier checks.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
