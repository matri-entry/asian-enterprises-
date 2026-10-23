import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Asian Enterprises B2B Industrial Supply',
  description: 'Terms and conditions governing quotations, order placement, payments, and commercial contracts with Asian Enterprises.',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Terms & Conditions</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900">Commercial Terms & Conditions</h1>
          <p className="text-xs text-slate-500 mt-1">Draft for Company Legal Review &bull; Governed under laws of India</p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> The following provisions constitute standard commercial B2B terms for Asian Enterprises. Quotation-specific terms take precedence over general terms where expressly stipulated in written quotes.
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Quotations & Non-Binding Inquiries</h2>
            <p>
              Product displays, catalogue entries, and RFQ submissions on this website do not constitute a binding unilateral offer of sale. Quotations issued by Asian Enterprises are written commercial estimates subject to supplier stock availability, copper/metal price fluctuations, and validity dates explicitly specified on the quotation letterhead.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Order Confirmation & Purchase Orders</h2>
            <p>
              An order is deemed confirmed only upon receipt of an official Purchase Order (PO) or signed commercial quotation acceptance accompanied by the mutually agreed commercial advance payment or agreed credit documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. Taxes & Statutory Levies</h2>
            <p>
              Unless explicitly specified as &ldquo;GST Inclusive&rdquo;, all quotations are exclusive of applicable Goods and Services Tax (GST). Appropriate GST rates (5%, 12%, 18%, or 28% depending on HSN code classification) will be levied on tax invoices. Customers are responsible for providing valid GSTIN credentials to ensure input tax credit eligibility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Payment Terms</h2>
            <p>
              Standard commercial terms for new accounts require advance payment against proforma invoice prior to dispatch. Established enterprise clients may qualify for agreed credit cycles following credit verification and formal onboarding.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">5. Jurisdiction</h2>
            <p>
              Any disputes arising out of contracts or commercial supplies coordinated by Asian Enterprises shall be subject to the exclusive jurisdiction of the competent courts of <strong>Bengaluru, Karnataka</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
