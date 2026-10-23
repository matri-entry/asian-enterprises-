'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/data/company';
import { CATEGORIES } from '@/data/categories';
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle,
  Clock,
  Layers,
  Search
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Industrial Contact Strip */}
      <div className="bg-[#0B2D5B] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>Bengaluru (HQ) &bull; Jaipur (Sales) &bull; Pan-India Supply</span>
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
            </span>
            <span className="hidden lg:inline-block text-slate-400">|</span>
            <span className="hidden lg:inline-block text-slate-300 font-mono text-[11px]">
              GSTIN: {COMPANY.gstin}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-slate-200">
            <a 
              href={`tel:${COMPANY.contact.primaryPhone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Bengaluru HQ"
            >
              <Phone className="w-3.5 h-3.5 text-[#F05A28]" />
              <span className="font-semibold text-white tracking-wide">{COMPANY.contact.primaryPhoneDisplay}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <a 
              href={`mailto:${COMPANY.contact.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F05A28]" />
              <span>{COMPANY.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Approved Official Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.01]">
              <Image 
                src="/images/logo.png" 
                alt="Asian Enterprises - Industrial Trading & Supply" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link 
              href="/" 
              className="text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2"
            >
              Home
            </Link>

            {/* Categories Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              onMouseLeave={() => setCategoriesDropdownOpen(false)}
            >
              <Link 
                href="/products" 
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2"
              >
                <span>Products & Catalogue</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {categoriesDropdownOpen && (
                <div className="absolute left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-3 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Product Categories ({CATEGORIES.length})
                    </span>
                    <Link 
                      href="/products" 
                      className="text-xs font-semibold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1"
                    >
                      View All &rarr;
                    </Link>
                  </div>
                  <div className="max-h-[380px] overflow-y-auto py-1">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.slug}`}
                        className="flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B2D5B] transition-colors group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{cat.title}</span>
                        <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#F05A28] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/boq-upload" 
              className="text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#F05A28]" />
              <span>Bulk BOQ Upload</span>
            </Link>

            <Link 
              href="/custom-sourcing" 
              className="text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2"
            >
              Custom Sourcing
            </Link>

            <Link 
              href="/about" 
              className="text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-sm font-semibold text-slate-700 hover:text-[#0B2D5B] transition-colors py-2"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent("Hello Asian Enterprises, I have an industrial requirement to quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/rfq"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F05A28] hover:bg-[#D94819] text-white text-xs font-bold tracking-wide uppercase rounded-md shadow-xs transition-all hover:shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/rfq"
              className="px-3 py-1.5 bg-[#F05A28] text-white text-xs font-bold rounded-md uppercase"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#0B2D5B] hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md flex items-center justify-between"
            >
              <span>Browse All Products</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="pl-3 pr-2 py-2 bg-slate-50 rounded-md">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Categories
              </span>
              <div className="grid grid-cols-1 gap-1 text-xs">
                {CATEGORIES.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 text-slate-700 hover:text-[#0B2D5B]"
                  >
                    • {cat.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 font-semibold text-[#F05A28]"
                >
                  View all 12 categories &rarr;
                </Link>
              </div>
            </div>

            <Link 
              href="/boq-upload" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#F05A28]" />
              <span>Bulk BOQ Upload</span>
            </Link>

            <Link 
              href="/custom-sourcing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Custom Sourcing
            </Link>

            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <Link
                href="/rfq"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-[#F05A28] text-white font-bold text-sm uppercase rounded-md shadow-xs"
              >
                Request a Quote
              </Link>
              <a
                href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-emerald-600 text-white font-semibold text-sm rounded-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
