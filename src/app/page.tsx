import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import WorkflowSection from '@/components/home/WorkflowSection';
import CustomerSegmentsSection from '@/components/home/CustomerSegmentsSection';
import PanIndiaSection from '@/components/home/PanIndiaSection';
import CustomSourcingSection from '@/components/home/CustomSourcingSection';
import ContactFormClient from '@/components/contact/ContactFormClient';
import { COMPANY } from '@/data/company';
import { Building2, Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Asian Enterprises | B2B Industrial Trading, Sourcing & Procurement India',
  description: 'Your trusted partner for industrial procurement. Electrical products, power cables, switchgear, safety products, and multi-category sourcing for businesses across India.',
  openGraph: {
    title: 'Asian Enterprises | Industrial Procurement Partner',
    description: 'B2B industrial trading, procurement, and multi-category sourcing across India. Operations in Bengaluru & Jaipur.',
    images: ['/images/logo.png']
  }
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. 12 Core Industrial Product Categories */}
      <CategoryGrid />

      {/* 3. 4-Step Procurement Workflow */}
      <WorkflowSection />

      {/* 4. Industrial Customer Segments */}
      <CustomerSegmentsSection />

      {/* 5. Custom Product Sourcing Section */}
      <CustomSourcingSection />

      {/* 6. Pan-India Supply Logistics */}
      <PanIndiaSection />

      {/* 7. Homepage Direct Enquiry Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block">
                Connect With Our Procurement Desks
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Share Your Requirement With Asian Enterprises
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you need a single fast-moving replacement component or complete project material supply across electrical and mechanical categories, our desks in Bengaluru and Jaipur are ready to assist.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Main Operations (Bengaluru)</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {COMPANY.mainOperations.fullAddress}
                  </p>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold block pt-1">
                    GSTIN: {COMPANY.gstin}
                  </span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Regional Sales (Jaipur)</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Jaipur, Rajasthan &bull; Serving Northern and Western industrial zones
                  </p>
                </div>

                <div className="p-4 bg-[#0B2D5B] text-white rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-blue-200">Phone Hotline:</span>
                    <a href={`tel:${COMPANY.contact.primaryPhone}`} className="font-bold text-white hover:text-[#F05A28]">
                      {COMPANY.contact.primaryPhoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-blue-200">Direct Email:</span>
                    <a href={`mailto:${COMPANY.contact.email}`} className="font-bold text-white hover:text-[#F05A28]">
                      {COMPANY.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between border-t border-blue-900 pt-2 text-[11px] text-blue-200">
                    <span>Working Hours:</span>
                    <span>{COMPANY.businessHours.days} ({COMPANY.businessHours.hours})</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
