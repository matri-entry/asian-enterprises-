import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Asian Enterprises B2B Industrial Supply',
  description: 'Privacy policy for Asian Enterprises regarding B2B customer quotation information, drawings, and communications.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900">Privacy Policy (B2B Procurement)</h1>
          <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026 &bull; Draft for Company Review</p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> This is legally cautious draft content outlining Asian Enterprises' commercial data handling practices. Final terms are subject to formal legal review by the management of Asian Enterprises.
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Commercial Context</h2>
            <p>
              ASIAN ENTERPRISES (&ldquo;the Company&rdquo;) operates a Business-to-Business (B2B) industrial procurement, trading, and sourcing service. We collect commercial contact and project specification data solely to prepare quotations, verify supplier stock, coordinate freight dispatches, and issue tax-compliant commercial invoices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Information We Collect</h2>
            <p>
              We collect information provided directly by clients when requesting quotations, uploading project BOQs, or submitting custom sourcing inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Contact Person Full Name, Corporate Email Address, and Mobile Number.</li>
              <li>Company / Firm Name, Billing Address, and GSTIN (Goods and Services Tax Identification Number).</li>
              <li>Project site delivery addresses and target commissioning dates.</li>
              <li>Project Bill of Quantities (BOQ), single-line diagrams (SLDs), technical product schedules, and bill-of-materials files.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. How Information is Used</h2>
            <p>
              Client information is utilized strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Assess material availability and obtain competitive manufacturer and distributor wholesale pricing.</li>
              <li>Generate written commercial quotations and proforma invoices.</li>
              <li>Coordinate with freight and third-party transport carriers for site dispatches.</li>
              <li>Issue statutory tax invoices and generate E-Way bills under Indian GST regulations.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Document & Data Protection</h2>
            <p>
              Customer BOQs, SLDs, and technical drawing files uploaded to our portal are stored in protected server directories with access restricted to Asian Enterprises procurement and engineering staff. We do not sell, rent, or publicly disclose customer project specifications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">5. Contact Information</h2>
            <p>
              For privacy inquiries or data update requests, contact our compliance desk at:<br />
              <strong>Asian Enterprises</strong><br />
              Email: {COMPANY.contact.email}<br />
              Address: {COMPANY.mainOperations.fullAddress}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
