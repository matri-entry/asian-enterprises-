import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { ArrowRight, Layers, FileText } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F05A28] uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Category Industrial Supply</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Industrial Product Categories
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Extensive portfolio sourced through established manufacturer and distributor channels. Explore core categories or request custom sourcing for specialized specifications.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/products"
              className="text-xs font-bold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Category Image Header */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase bg-[#0B2D5B]/90 text-blue-200 px-2 py-0.5 rounded backdrop-blur-xs">
                    Category {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0B2D5B] transition-colors leading-snug line-clamp-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Subcategory Pills */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {cat.subcategories.slice(0, 3).map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium truncate max-w-[200px]"
                      >
                        {sub}
                      </span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1 py-0.5 font-medium">
                        +{cat.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="font-semibold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Products</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/rfq?category=${cat.slug}`}
                    className="text-[11px] font-medium text-slate-500 hover:text-[#F05A28] transition-colors"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Categories */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 text-[#F05A28] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Have a customized or multi-category Bill of Materials?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Save time by submitting your complete project BOQ rather than individual requests.
              </p>
            </div>
          </div>
          <Link
            href="/boq-upload"
            className="shrink-0 px-4 py-2.5 bg-[#0B2D5B] hover:bg-blue-900 text-white text-xs font-bold rounded-md uppercase tracking-wider transition-colors"
          >
            Upload Complete BOQ
          </Link>
        </div>
      </div>
    </section>
  );
}
