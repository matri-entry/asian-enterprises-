import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, ProductItem } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { COMPANY } from '@/data/company';
import ProductDetailClient from './ProductDetailClient';
import ProductCard from '@/components/products/ProductCard';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Truck, 
  FileText, 
  ArrowRight,
  ChevronRight,
  Info
} from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Asian Enterprises Quotation & Supply`,
    description: `${product.shortDescription} - Request bulk quotation and pan-India dispatch from Asian Enterprises.`,
    openGraph: {
      title: `${product.name} - Asian Enterprises`,
      description: product.shortDescription,
      images: [product.image]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  // Find related products in same category
  const related = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0B2D5B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#0B2D5B] transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link href={`/categories/${product.categorySlug}`} className="hover:text-[#0B2D5B] transition-colors">
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Product Main Section (Image + Client Interactive RFQ Starter) */}
        <ProductDetailClient product={product} />

        {/* Technical Specifications & Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specifications Table */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Technical Specifications & Engineering Details
              </h2>
              <p className="text-xs text-slate-500 mt-2">
                Authentic technical parameters based on catalogue data. Additional project ratings confirmed upon RFQ.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <td className="py-2.5 px-4 font-bold text-slate-700 w-1/3">Product Name</td>
                    <td className="py-2.5 px-4 text-slate-900 font-semibold">{product.name}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-4 font-bold text-slate-700">Category</td>
                    <td className="py-2.5 px-4 text-slate-800">{product.categoryName}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <td className="py-2.5 px-4 font-bold text-slate-700">Standard Packaging Unit</td>
                    <td className="py-2.5 px-4 text-slate-800">{product.packagingUnit}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2.5 px-4 font-bold text-slate-700">Lead Time / Dispatch Mode</td>
                    <td className="py-2.5 px-4 text-slate-800">{product.leadTime}</td>
                  </tr>

                  {/* Render Verified Specifications */}
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr 
                      key={key} 
                      className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}
                    >
                      <td className="py-2.5 px-4 font-bold text-slate-700">{key}</td>
                      <td className="py-2.5 px-4 text-slate-800">{val}</td>
                    </tr>
                  ))}

                  <tr className="bg-slate-50/50">
                    <td className="py-2.5 px-4 font-bold text-slate-700">Pricing & Commercials</td>
                    <td className="py-2.5 px-4 text-[#F05A28] font-bold">
                      Quotation based on volume & delivery location (Request a Quote)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Verified Operational Characteristics */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Key Performance & Supply Highlights:
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.verifiedFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F05A28] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Industrial Description */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Product Application & Context:
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>

          {/* Sourcing & Procurement Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0B2D5B]" />
                <span>Pan-India Supply & Fulfilment</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100">
                  <strong className="text-[#0B2D5B] block font-bold mb-1">
                    Procurement Workflow:
                  </strong>
                  <span>1. Share quantity & delivery pincode.</span><br />
                  <span>2. Receive commercial quote with freight terms.</span><br />
                  <span>3. Dispatch coordinated upon order confirmation.</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Manufacturer test certificates provided upon request</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#0B2D5B] shrink-0" />
                    <span>GST tax invoice with 100% credit pass-through</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/boq-upload"
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F05A28]" />
                  <span>Have a Bulk Bill of Quantities?</span>
                </Link>
              </div>
            </div>

            {/* Direct Support Box */}
            <div className="bg-slate-900 rounded-xl p-6 text-white text-xs space-y-3">
              <span className="text-[10px] uppercase font-bold text-[#F05A28] tracking-wider block">
                Technical Sales Desk
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Have questions regarding breaking capacity, core sizing, or custom panel fabrication?
              </p>
              <div className="space-y-1 pt-1 font-mono text-xs">
                <a 
                  href={`tel:${COMPANY.contact.primaryPhone}`} 
                  className="block text-white hover:text-[#F05A28] transition-colors"
                >
                  Call: {COMPANY.contact.primaryPhoneDisplay}
                </a>
                <a 
                  href={`mailto:${COMPANY.contact.email}`} 
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  Email: {COMPANY.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Related Products in {product.categoryName}
              </h3>
              <Link
                href={`/categories/${product.categorySlug}`}
                className="text-xs font-bold text-[#0B2D5B] hover:text-[#F05A28] flex items-center gap-1"
              >
                <span>View All In Category</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
