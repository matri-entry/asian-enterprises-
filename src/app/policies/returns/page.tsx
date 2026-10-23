import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Returns & Claims Policy | Asian Enterprises B2B Industrial Supply',
  description: 'Procedures for transit damages, discrepancy reporting, and material inspection claims with Asian Enterprises.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B]">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Returns & Claims</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900">Returns & Inspection Claims Policy</h1>
          <p className="text-xs text-slate-500 mt-1">B2B Commercial Procurement &bull; Draft for Company Review</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Nature of B2B Industrial Supplies</h2>
            <p>
              Unlike consumer retail e-commerce, industrial supplies consist of project-specific cable drum cuts, custom-engineered electrical panels, and bulk industrial consignments procured specifically against verified purchase orders. Consequently, returns for change of mind or buyer surplus are not accommodated.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Inspection on Receipt & Notice Window</h2>
            <p>
              The consignee must inspect incoming shipments at the time of delivery. Any physical packaging damage, shortage against the lorry receipt (LR), or apparent defect must be endorsed on the carrier delivery docket. Notice of discrepancies or manufacturing defects must be submitted in writing to Asian Enterprises within <strong>48 hours of physical receipt</strong> accompanied by photographs and consignment details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. Manufacturer Warranty & Defect Claims</h2>
            <p>
              Equipment supplied by Asian Enterprises carries standard manufacturer warranties where applicable. For products confirmed to contain manufacturing defects within the warranty period, Asian Enterprises facilitates replacement or repair through the manufacturer or authorized warranty channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Custom Fabricated Items</h2>
            <p>
              Custom-built Power Control Centers (PCC), Motor Control Centers (MCC), busduct systems, and custom-sheared earthing plates manufactured according to approved single-line diagrams (SLD) are strictly non-cancellable and non-returnable once fabrication has commenced.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
