'use client';

import React, { useState, useMemo } from 'react';
import { ProductItem } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import ProductCard from './ProductCard';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Layers, 
  Zap, 
  FileText,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface ProductListClientProps {
  initialProducts: ProductItem[];
  preselectedCategory?: string;
}

export default function ProductListClient({ 
  initialProducts, 
  preselectedCategory 
}: ProductListClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(preselectedCategory || 'all');
  const [fastMovingOnly, setFastMovingOnly] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Search matching
      const matchesSearch = 
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.verifiedFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category matching
      const matchesCategory = 
        selectedCategory === 'all' || 
        product.categorySlug === selectedCategory;

      // Fast-moving filter
      const matchesFastMoving = !fastMovingOnly || product.isFastMoving;

      return matchesSearch && matchesCategory && matchesFastMoving;
    });
  }, [initialProducts, searchQuery, selectedCategory, fastMovingOnly]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setFastMovingOnly(false);
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, switches, cables, panels, instruments, fast-moving items..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B] bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Fast Moving Toggle & Reset */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setFastMovingOnly(!fastMovingOnly)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border flex items-center gap-1.5 transition-colors ${
                fastMovingOnly 
                  ? 'bg-amber-500 border-amber-600 text-white' 
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Fast-Moving Only</span>
            </button>

            {(searchQuery || selectedCategory !== 'all' || fastMovingOnly) && (
              <button
                onClick={handleReset}
                className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-100">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#0B2D5B] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Products ({initialProducts.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = initialProducts.filter(p => p.categorySlug === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  isSelected
                    ? 'bg-[#0B2D5B] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{cat.shortTitle}</span>
                <span className="ml-1 opacity-70 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>
          Showing <strong className="text-slate-900">{filteredProducts.length}</strong> verified product offering(s)
          {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.slug === selectedCategory)?.title}`}
        </span>

        <span className="hidden sm:inline-block text-slate-400">
          Official enquiry-based procurement &bull; Written quotations upon RFQ
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            No exact matching products found
          </h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            We source many specialized components not listed in our standard catalogue. You can submit a custom sourcing request or project BOQ to check availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/custom-sourcing"
              className="w-full sm:w-auto px-4 py-2 bg-[#0B2D5B] hover:bg-blue-900 text-white font-bold text-xs uppercase rounded transition-colors"
            >
              Submit Custom Sourcing Request
            </Link>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* Bottom Procurement Banner */}
      <div className="bg-gradient-to-r from-[#0B2D5B] to-slate-900 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div>
          <h3 className="text-lg font-bold text-white">
            Need pricing on multiple product lines or turnkey contractor package?
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Consolidate your entire order with Asian Enterprises. Sourcing electrical switchgear, cables, testing tools, and industrial hardware under one unified commercial quotation.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/boq-upload"
            className="px-5 py-2.5 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-xs"
          >
            Upload Project BOQ
          </Link>
          <Link
            href="/rfq"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded border border-white/20 transition-colors"
          >
            Multi-Item RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
