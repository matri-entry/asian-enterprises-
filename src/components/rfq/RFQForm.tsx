'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { RFQLineItem } from '@/lib/types';
import { 
  Plus, 
  Trash2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  FileText, 
  ArrowRight,
  MessageCircle,
  Building,
  MapPin,
  Calendar
} from 'lucide-react';
import { COMPANY } from '@/data/company';

interface RFQFormProps {
  initialCategory?: string;
  initialProductName?: string;
}

export default function RFQForm({ initialCategory, initialProductName }: RFQFormProps) {
  // Customer details state
  const [customer, setCustomer] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    gstin: '',
    city: '',
    state: '',
    pincode: ''
  });

  // Multiple product line items
  const [items, setItems] = useState<RFQLineItem[]>([
    {
      productName: initialProductName || '',
      category: initialCategory || '',
      quantity: '1',
      unit: 'Pieces',
      technicalSpecs: '',
      brandPreference: ''
    }
  ]);

  const [requiredDeliveryDate, setRequiredDeliveryDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [consentAcknowledged, setConsentAcknowledged] = useState(false);

  // Submission UI state
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ rfqId: string; message: string } | null>(null);

  // Add line item
  const handleAddItem = () => {
    setItems([
      ...items,
      {
        productName: '',
        category: '',
        quantity: '1',
        unit: 'Pieces',
        technicalSpecs: '',
        brandPreference: ''
      }
    ]);
  };

  // Remove line item
  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((_, idx) => idx !== index));
  };

  // Update line item
  const handleItemChange = (index: number, field: keyof RFQLineItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    setItems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Client-side validations
    if (!customer.fullName.trim()) {
      setErrorMsg('Please enter your full contact name.');
      return;
    }
    if (!customer.companyName.trim()) {
      setErrorMsg('Please enter your company or business name.');
      return;
    }
    if (!customer.email.trim() || !/^\S+@\S+\.\S+$/.test(customer.email)) {
      setErrorMsg('Please provide a valid corporate/business email address.');
      return;
    }
    if (!customer.phone.trim() || customer.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile or phone number.');
      return;
    }
    if (!customer.city.trim()) {
      setErrorMsg('Please specify the delivery city.');
      return;
    }
    if (!customer.pincode.trim() || !/^\d{6}$/.test(customer.pincode.trim())) {
      setErrorMsg('Please enter a valid 6-digit delivery pincode.');
      return;
    }
    if (items.some(it => !it.productName.trim())) {
      setErrorMsg('Please specify a product or equipment name for all line items.');
      return;
    }
    if (!consentAcknowledged) {
      setErrorMsg('Please acknowledge that pricing and terms are subject to written commercial quotation.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer,
          items,
          requiredDeliveryDate,
          additionalNotes
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit Request for Quotation.');
      }

      setSuccessData({
        rfqId: data.rfqId,
        message: data.message
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred while submitting your RFQ.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Quotation Request Registered
        </span>

        <h3 className="text-2xl font-black text-slate-900 mt-4 mb-2">
          RFQ Reference: <span className="text-[#0B2D5B]">{successData.rfqId}</span>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-8">
          {successData.message}
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left mb-8 space-y-3 text-xs text-slate-700">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Company:</span>
            <span className="font-bold text-slate-900">{customer.companyName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Contact Person:</span>
            <span className="font-semibold">{customer.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Delivery Location:</span>
            <span className="font-semibold">{customer.city} - {customer.pincode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Line Items Sourced:</span>
            <span className="font-bold text-[#F05A28]">{items.length} Product(s)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Asian Enterprises, I just submitted RFQ Reference ${successData.rfqId} for ${customer.companyName}. Please confirm receipt.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Notify Sales on WhatsApp</span>
          </a>

          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-md transition-colors"
          >
            Return to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8">
      {errorMsg && (
        <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Submission Error:</strong>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}

      {/* Section 1: Customer & Company Details */}
      <div>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <Building className="w-5 h-5 text-[#0B2D5B]" />
          <h3 className="text-base font-bold text-slate-900">
            1. Company & Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Contact Person Full Name *
            </label>
            <input
              type="text"
              required
              value={customer.fullName}
              onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
              placeholder="e.g. Ramesh Sharma"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Company / Business Name *
            </label>
            <input
              type="text"
              required
              value={customer.companyName}
              onChange={(e) => setCustomer({ ...customer, companyName: e.target.value })}
              placeholder="e.g. Apex Engineering Ltd"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Corporate / Business Email *
            </label>
            <input
              type="email"
              required
              value={customer.email}
              onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
              placeholder="e.g. procurement@apex.com"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Phone / Mobile (10-Digit) *
            </label>
            <input
              type="tel"
              required
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              GSTIN (Optional, for tax invoice)
            </label>
            <input
              type="text"
              value={customer.gstin}
              onChange={(e) => setCustomer({ ...customer, gstin: e.target.value.toUpperCase() })}
              placeholder="e.g. 29ABCDE1234F1Z5"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 uppercase focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Delivery City *
              </label>
              <input
                type="text"
                required
                value={customer.city}
                onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                placeholder="e.g. Bengaluru"
                className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Pincode *
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={customer.pincode}
                onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                placeholder="560068"
                className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Multi-Item Requirement Builder */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0B2D5B]" />
            <h3 className="text-base font-bold text-slate-900">
              2. Product Line Items ({items.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#0B2D5B] hover:bg-blue-100 font-bold text-xs rounded-md border border-blue-200 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Another Product</span>
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Item #{idx + 1}
                </span>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(idx)}
                    className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                <div className="sm:col-span-5">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Product / Equipment Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={item.productName}
                    onChange={(e) => handleItemChange(idx, 'productName', e.target.value)}
                    placeholder="e.g. 63A 4P 36kA MCCB or 3.5C x 185 sqmm XLPE Cable"
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Category (Optional)
                  </label>
                  <select
                    value={item.category}
                    onChange={(e) => handleItemChange(idx, 'category', e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  >
                    <option value="">Select Category...</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={item.quantity}
                    onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Unit
                  </label>
                  <select
                    value={item.unit}
                    onChange={(e) => handleItemChange(idx, 'unit', e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  >
                    <option value="Pieces">Pieces / Nos</option>
                    <option value="Meters">Meters</option>
                    <option value="Coils">Coils</option>
                    <option value="Drums">Drums</option>
                    <option value="Boxes">Boxes</option>
                    <option value="Kilograms">Kilograms (Kg)</option>
                    <option value="Sets">Sets</option>
                  </select>
                </div>

                <div className="sm:col-span-8">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Technical Specifications / Ratings (Optional)
                  </label>
                  <input
                    type="text"
                    value={item.technicalSpecs}
                    onChange={(e) => handleItemChange(idx, 'technicalSpecs', e.target.value)}
                    placeholder="e.g. Breaking capacity, IP rating, voltage, conductor size, temperature class"
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Brand Preference (Optional)
                  </label>
                  <input
                    type="text"
                    value={item.brandPreference}
                    onChange={(e) => handleItemChange(idx, 'brandPreference', e.target.value)}
                    placeholder="e.g. L&T, Schneider, Polycab, or Equivalent"
                    className="w-full px-3 py-2 rounded-md bg-white border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2D5B] hover:text-[#F05A28] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add another line item to this quotation</span>
          </button>
        </div>
      </div>

      {/* Section 3: Project Logistics & Notes */}
      <div>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <Calendar className="w-5 h-5 text-[#0B2D5B]" />
          <h3 className="text-base font-bold text-slate-900">
            3. Delivery Schedule & Additional Notes
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Required On-Site Date (Optional)
            </label>
            <input
              type="date"
              value={requiredDeliveryDate}
              onChange={(e) => setRequiredDeliveryDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Helps us prioritize immediate shutdown or commissioning orders.
            </span>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Project Context / Special Instructions (Optional)
            </label>
            <textarea
              rows={3}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="e.g. Staggered dispatch required, test certificate needed, specific site unloading gate instructions."
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>
        </div>
      </div>

      {/* Consent & Submit */}
      <div className="pt-4 border-t border-slate-200 space-y-4">
        <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600">
          <input
            type="checkbox"
            required
            checked={consentAcknowledged}
            onChange={(e) => setConsentAcknowledged(e.target.checked)}
            className="mt-0.5 rounded text-[#0B2D5B] focus:ring-[#0B2D5B]"
          />
          <span>
            I acknowledge that Asian Enterprises will review the submitted requirement with its supplier network to prepare an official commercial quotation. Submitted details will be kept confidential and used solely for RFQ processing.
          </span>
        </label>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <span className="text-xs text-slate-500">
            Need to upload a complete spreadsheet instead? <Link href="/boq-upload" className="text-[#0B2D5B] font-bold underline">Use BOQ Upload</Link>
          </span>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#F05A28] hover:bg-[#D94819] disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Quotation Request...</span>
              </>
            ) : (
              <>
                <span>Submit Request for Quotation</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
