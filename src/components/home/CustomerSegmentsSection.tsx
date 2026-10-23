import React from 'react';
import Link from 'next/link';
import { 
  Factory, 
  HardHat, 
  Cpu, 
  Cog, 
  Wrench, 
  Building,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function CustomerSegmentsSection() {
  const segments = [
    {
      title: "Manufacturing & Factories",
      subtitle: "Continuous Production & Plant Utilities",
      icon: Factory,
      needs: [
        "High-uptime power distribution components",
        "Plant safety wear, 11KV gloves, and fire gear",
        "Pneumatic tubing, valves, and fluid fasteners"
      ],
      cta: "Factory Supplies"
    },
    {
      title: "EPC & Infrastructure Contractors",
      subtitle: "Turnkey Commercial & Heavy Projects",
      icon: HardHat,
      needs: [
        "Complete Project BOQ fulfillment",
        "HT/LT power cables cut to site drum schedules",
        "Perforated cable trays and structural earthing"
      ],
      cta: "EPC Sourcing"
    },
    {
      title: "Panel Builders & Integrators",
      subtitle: "PCC, MCC, APFC & Control Panels",
      icon: Cpu,
      needs: [
        "MCCBs, contactors, MPCBs, and timers",
        "Copper/aluminium lugs, terminal blocks, DIN rails",
        "Busbar DMC insulators and enclosure fans"
      ],
      cta: "Panel Components"
    },
    {
      title: "Original Equipment Manufacturers (OEMs)",
      subtitle: "Repetitive Machinery & Automation",
      icon: Cog,
      needs: [
        "Inductive sensors, limit switches, and photocells",
        "SMPS industrial power supplies and relays",
        "Batch scheduling and scheduled staggered deliveries"
      ],
      cta: "OEM Supply"
    },
    {
      title: "Maintenance & Plant Engineers",
      subtitle: "Preventive Shutdowns & Rapid Replacements",
      icon: Wrench,
      needs: [
        "Insulation megger testers and true-RMS clamp meters",
        "Emergency replacement contactors and HRC fuses",
        "Fast-moving electrical consumables and cable glands"
      ],
      cta: "MRO Supplies"
    },
    {
      title: "Procurement Departments",
      subtitle: "Centralized Vendor Rationalization",
      icon: Building,
      needs: [
        "Single-vendor invoice for electrical + hardware BOM",
        "Compliant GST invoices and dispatch documentation",
        "Transparent price discovery and pan-India logistics"
      ],
      cta: "Corporate Sourcing"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-2">
            Who We Serve
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Tailored Sourcing for Industrial Sectors
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Whether you manage large turnkey electrical projects, run a 24/7 manufacturing facility, or build precision control panels, Asian Enterprises coordinates your exact material needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#0B2D5B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B2D5B] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0B2D5B]" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {seg.title}
                  </h3>
                  <span className="text-xs font-medium text-[#F05A28] block mb-4">
                    {seg.subtitle}
                  </span>

                  <ul className="space-y-2 mb-6">
                    {seg.needs.map((need, nIdx) => (
                      <li key={nIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/rfq?target=${encodeURIComponent(seg.title)}`}
                    className="text-xs font-bold text-[#0B2D5B] hover:text-[#F05A28] flex items-center justify-between transition-colors group"
                  >
                    <span>Request Quotation for {seg.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
