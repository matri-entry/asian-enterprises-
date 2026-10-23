import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, 
  Search, 
  FileCheck, 
  Truck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Share Requirement",
      desc: "Submit your itemized RFQ, engineering drawings, or bulk project BOQ/BOM through our online portal or direct sales channels.",
      icon: FileSpreadsheet,
      action: "Upload or submit",
      link: "/rfq"
    },
    {
      number: "02",
      title: "Supplier Sourcing",
      desc: "Our procurement desks in Bengaluru and Jaipur coordinate with verified manufacturers and distributors to confirm stock, specs, and volume pricing.",
      icon: Search,
      action: "Multi-vendor check",
      link: "/about"
    },
    {
      number: "03",
      title: "Tailored Quotation",
      desc: "Receive a formal commercial quotation including itemized unit costs, applicable GST rates, batch lead times, and freight terms.",
      icon: FileCheck,
      action: "Transparent terms",
      link: "/contact"
    },
    {
      number: "04",
      title: "Order Fulfilment",
      desc: "Upon commercial approval, Asian Enterprises coordinates procurement, pre-dispatch quality verification, transit packaging, and pan-India dispatch.",
      icon: Truck,
      action: "Dispatch coordination",
      link: "/policies/shipping"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-2">
            Structured Sourcing Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How Procurement Works With Asian Enterprises
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A transparent four-step workflow built to convert complex industrial requirements into dependable on-site dispatches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-[#0B2D5B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0B2D5B] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#F05A28]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    {step.action}
                  </span>
                  <Link
                    href={step.link}
                    className="font-bold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2D5B] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs transition-colors"
          >
            <span>Start Your Procurement Request</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
