'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ProductItem } from '@/data/products';
import { COMPANY } from '@/data/company';
import { 
  MessageCircle, 
  ArrowRight, 
  Send, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2,
  FileText
} from 'lucide-react';

interface ProductDetailClientProps {
  product: ProductItem;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState('1');
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeChecked(true);
    }
  };

  const handleQuoteClick = () => {
    const params = new URLSearchParams({
      product: product.name,
      category: product.categoryName,
      qty: quantity,
      pincode: pincode
    });
    router.push(`/rfq?${params.toString()}`);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Asian Enterprises, I require a quotation for:\n\n*Product:* ${product.name}\n*Quantity:* ${quantity} ${product.packagingUnit}\n*Delivery Location:* ${pincode ? `Pincode ${pincode}` : 'Pan-India'}\n\nPlease share commercial pricing and lead time.`
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Product Media Display */}
        <div className="lg:col-span-5 relative h-80 sm:h-96 w-full bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="text-xs font-bold bg-[#0B2D5B] text-white px-2.5 py-1 rounded shadow-xs">
              {product.categoryName.split('&')[0].trim()}
            </span>
            {product.isFastMoving && (
              <span className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded shadow-xs flex items-center gap-1 w-max">
                <Zap className="w-3 h-3" />
                <span>Fast Moving Item</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[11px] font-mono text-white bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-xs">
              Ref ID: {product.id}
            </span>
          </div>
        </div>

        {/* Product Procurement Card */}
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
          <div>
            <span className="text-xs font-bold text-[#F05A28] uppercase tracking-wider block mb-1">
              Industrial Supply & Sourcing
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Commercial Pricing
              </span>
              <span className="text-base font-bold text-[#0B2D5B]">
                Price upon Quotation (RFQ)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Volume tier discounts & freight included in formal quote.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block">Standard Supply Unit</span>
              <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mt-0.5">
                {product.packagingUnit}
              </span>
            </div>
          </div>

          {/* Quantity & Location Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Required Quantity ({product.packagingUnit})
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B] text-slate-900 font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Destination Pincode (Optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    setPincodeChecked(false);
                  }}
                  placeholder="e.g. 560068"
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B] text-slate-900"
                />
                <button
                  type="button"
                  onClick={handlePincodeCheck}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded text-xs shrink-0 border border-slate-200"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>

          {pincodeChecked && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Pan-India logistics available to pincode <strong>{pincode}</strong>. Freight charges and transit time will be calculated on official quote.
              </span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="w-full sm:flex-1 py-3.5 px-6 bg-[#F05A28] hover:bg-[#D94819] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request a Quote ({quantity} {product.packagingUnit})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Lead Time: {product.leadTime}</span>
              </span>
              <Link href="/boq-upload" className="text-[#0B2D5B] hover:underline font-semibold flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#F05A28]" />
                <span>Upload Bulk BOQ Instead &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
