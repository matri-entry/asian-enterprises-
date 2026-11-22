import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import ContactFormClient from '@/components/contact/ContactFormClient';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Gurudev Enterprise | Bengaluru Office & Pan-India Sales Desk',
  description: 'Get in touch with Gurudev Enterprise for industrial electrical equipment, MRO supplies, bulk BOQs, and multi-category sourcing inquiries across India.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb & Header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#102B46] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Contact Us
            </span>
          </nav>

          <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider block mb-1">
            Commercial Desks
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact GURUDEV ENTERPRISE
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Reach out to our commercial procurement desk in Bengaluru for quotations, delivery lead times, product availability, and vendor onboarding.
          </p>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Verified Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bengaluru Main Operations */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#102B46]">
                <Building2 className="w-5 h-5 text-[#102B46]" />
                <h2 className="font-bold text-sm text-slate-900">
                  Main Operations (Bengaluru)
                </h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY.mainOperations.fullAddress}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 font-semibold text-[11px]">
                  GSTIN: {COMPANY.gstin}
                </span>
                <a
                  href={COMPANY.mainOperations.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#102B46] hover:text-[#F28C28] flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pan-India Logistics Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#0B9295]">
                <MapPin className="w-5 h-5 text-[#0B9295]" />
                <h2 className="font-bold text-sm text-slate-900">
                  Pan-India Supply & Freight Network
                </h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordinated dispatches to industrial sites, plant gates, EPC projects, and contractor warehouses across all states in India.
              </p>
              <p className="text-[11px] text-slate-400 italic">
                * Commercial onboarding, material sampling, and site deliveries scheduled on confirmed orders.
              </p>
            </div>

            {/* Direct Telecom & Email Contacts */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3 text-xs">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400 mb-2">
                Direct Communications
              </h3>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F28C28] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Mobile Hotline (Call)</span>
                    <a href={`tel:${COMPANY.contact.primaryPhone}`} className="font-bold text-slate-900 hover:text-[#102B46]">
                      {COMPANY.contact.primaryPhoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">WhatsApp Sales</span>
                    <a 
                      href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent("Hello Gurudev Enterprise, I have a requirement to discuss.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      {COMPANY.contact.whatsappDisplay} (Instant Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Official Business Email</span>
                    <a href={`mailto:${COMPANY.contact.email}`} className="font-bold text-slate-900 hover:text-[#102B46]">
                      {COMPANY.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Business Working Hours</span>
                    <span className="font-medium text-slate-700">
                      {COMPANY.businessHours.days}: {COMPANY.businessHours.hours} ({COMPANY.businessHours.timezone})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>
        </div>
      </div>
    </div>
  );
}
