'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductItem } from '@/data/products';
import { COMPANY } from '@/data/company';
import { 
  FileText, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldAlert,
  Zap
} from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Asian Enterprises, I require a quotation for: ${product.name} (Ref: ${product.slug}). Quantity: 1 ${product.packagingUnit}. Delivery City: `)}`;

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Product Image Header */}
        <Link href={`/products/${product.slug}`} className="block relative h-48 w-full bg-slate-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
            <span className="text-[10px] font-semibold bg-[#0B2D5B] text-white px-2 py-0.5 rounded shadow-xs">
              {product.categoryName.split('&')[0].trim()}
            </span>
            {product.isFastMoving && (
              <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded shadow-xs flex items-center gap-1 w-max">
                <Zap className="w-2.5 h-2.5" />
                <span>Fast Moving</span>
              </span>
            )}
          </div>
        </Link>

        {/* Product Details */}
        <div className="p-4">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0B2D5B] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key verified highlights */}
          <ul className="mt-3 space-y-1">
            {product.verifiedFeatures.slice(0, 2).map((feat, fIdx) => (
              <li key={fIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span className="truncate max-w-[170px]">{product.leadTime}</span>
            </span>
            <span className="font-mono font-medium text-slate-600">
              Unit: {product.packagingUnit}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/rfq?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.categoryName)}`}
            className="w-full py-2 bg-[#F05A28] hover:bg-[#D94819] text-white text-xs font-bold uppercase tracking-wider rounded text-center transition-colors shadow-xs"
          >
            Quote RFQ
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded text-center border border-emerald-200 transition-colors flex items-center justify-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="w-full block text-center text-[11px] font-semibold text-slate-500 hover:text-[#0B2D5B] transition-colors pt-1"
        >
          View Technical Specifications &rarr;
        </Link>
      </div>
    </div>
  );
}
