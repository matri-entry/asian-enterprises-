import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import ProductListClient from '@/components/products/ProductListClient';
import { Layers, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industrial Product Catalogue | Asian Enterprises B2B Industrial Supply',
  description: 'Search and browse B2B electrical equipment, HT/LT power cables, switchgear, panel accessories, safety products, and industrial hardware for pan-India procurement.',
  openGraph: {
    title: 'Industrial Product Catalogue | Asian Enterprises',
    description: 'B2B procurement catalogue for factories, contractors, and panel builders across India.',
    images: ['/images/logo.png']
  }
};

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Products Catalogue
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F05A28] uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Pan-India B2B Industrial Supply</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Industrial Product Catalogue
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                Explore our core range of electrical panels, power cables, switchgear, testing instruments, and industrial consumables. Sourced through verified manufacturer channels for industrial projects across India.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                href="/boq-upload"
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold rounded shadow-xs flex items-center gap-2 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#F05A28]" />
                <span>Submit Complete BOQ</span>
              </Link>
              <Link
                href="/rfq"
                className="px-4 py-2 bg-[#F05A28] hover:bg-[#D94819] text-white text-xs font-bold uppercase rounded shadow-xs transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Client filter and product listing */}
        <ProductListClient initialProducts={PRODUCTS} />
      </div>
    </div>
  );
}
