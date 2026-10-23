import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { 
  ArrowRight, 
  FileText, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Truck,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { COMPANY } from '@/data/company';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category.title} | Asian Enterprises Pan-India Sourcing`,
    description: `Procure ${category.title} for industrial plants and infrastructure projects. Fast quotations from Asian Enterprises in Bengaluru & Jaipur.`,
    openGraph: {
      title: `${category.title} - Asian Enterprises`,
      description: category.description,
      images: [category.image]
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#0B2D5B] transition-colors">
            Categories
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{category.shortTitle}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block">
                Industrial Category Profile
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {category.title}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                {category.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                {category.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={`/rfq?category=${encodeURIComponent(category.title)}`}
                  className="px-5 py-2.5 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-colors"
                >
                  Request Category Quotation
                </Link>
                <Link
                  href="/boq-upload"
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#0B2D5B]" />
                  <span>Upload BOQ File</span>
                </Link>
              </div>
            </div>

            {/* Category Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 w-full bg-slate-100">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-mono bg-[#0B2D5B]/90 px-2.5 py-1 rounded backdrop-blur-xs">
                  Authentic Catalogue Line
                </span>
              </div>
            </div>
          </div>

          {/* Subcategories strip */}
          <div className="bg-slate-100/70 border-t border-slate-200 p-4 sm:px-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Subcategories & Sourced Families:
            </span>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((sub, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-2xs font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Verified Offerings in this Category ({categoryProducts.length})
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Commercial pricing and stock confirmation provided via official quotation.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1"
            >
              <span>All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-lg mx-auto">
              <p className="text-xs text-slate-600 mb-4">
                Products in this subcategory are custom-engineered per project single-line diagram (SLD).
              </p>
              <Link
                href={`/rfq?category=${encodeURIComponent(category.title)}`}
                className="px-4 py-2 bg-[#F05A28] text-white text-xs font-bold uppercase rounded inline-block"
              >
                Request Quotation for {category.shortTitle}
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Category Procurement CTA */}
        <div className="bg-[#0B2D5B] rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Looking for a custom rating or unlisted make in {category.shortTitle}?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Our multi-category supplier desk coordinates directly with manufacturers across India. Specify your make, core requirements, and delivery date.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/custom-sourcing"
              className="px-5 py-2.5 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              Submit Custom Sourcing Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
