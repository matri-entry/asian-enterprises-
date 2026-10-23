'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageCircle, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function CustomSourcingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    gstin: '',
    city: '',
    pincode: '',
    productName: '',
    technicalRequirements: '',
    quantity: '1',
    unit: 'Units',
    manufacturerPreference: '',
    requiredDeliveryDate: '',
    additionalNotes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ sourcingId: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all contact details.');
      return;
    }
    if (!formData.productName.trim()) {
      setErrorMsg('Please state the product or equipment name required.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/custom-sourcing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resJson = await res.json();
      if (!res.ok) {
        throw new Error(resJson.error || 'Failed to submit custom sourcing enquiry.');
      }

      setSuccessData({
        sourcingId: resJson.sourcingId,
        message: resJson.message
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Error processing your request.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-blue-100 text-[#0B2D5B] rounded-full flex items-center justify-center mx-auto mb-5">
          <Search className="w-8 h-8 text-[#0B2D5B]" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B2D5B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Sourcing Requirement Logged
        </span>

        <h3 className="text-2xl font-black text-slate-900 mt-4 mb-2">
          Sourcing Reference: <span className="text-[#F05A28]">{successData.sourcingId}</span>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-6">
          {successData.message}
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left mb-8 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Requested Product:</span>
            <span className="font-bold text-slate-900">{formData.productName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Quantity Needed:</span>
            <span className="font-semibold">{formData.quantity} {formData.unit}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Destination Location:</span>
            <span className="font-semibold">{formData.city || 'Pan-India'} - {formData.pincode}</span>
          </div>
          <div className="pt-1 text-slate-500 text-[11px]">
            * Our procurement desks in Bengaluru and Jaipur are cross-referencing distributor networks. We will return with available make, lead time, and commercial quotation.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Asian Enterprises, I submitted custom sourcing ticket ${successData.sourcingId} for "${formData.productName}". Please check sourcing feasibility.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Notify Sourcing Desk on WhatsApp</span>
          </a>

          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-md transition-colors"
          >
            Browse Catalogue
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
            <strong className="block font-bold">Error:</strong>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}

      {/* Product Sourcing Requirement */}
      <div>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <Search className="w-5 h-5 text-[#F05A28]" />
          <h3 className="text-base font-bold text-slate-900">
            1. Equipment / Component Specification
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 text-xs">
          <div className="sm:col-span-8">
            <label className="block font-bold text-slate-700 mb-1">
              Product / Machine / Material Description *
            </label>
            <input
              type="text"
              required
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              placeholder="e.g. Explosion proof 3-phase motor 15kW or Specialized DIN-rail signal isolator"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-bold text-slate-700 mb-1">
              Quantity *
            </label>
            <input
              type="text"
              required
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="e.g. 5"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-bold text-slate-700 mb-1">
              Unit
            </label>
            <select
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            >
              <option value="Units">Units / Nos</option>
              <option value="Sets">Sets</option>
              <option value="Meters">Meters</option>
              <option value="Coils">Coils</option>
              <option value="Kilograms">Kg</option>
            </select>
          </div>

          <div className="sm:col-span-12">
            <label className="block font-bold text-slate-700 mb-1">
              Technical Parameters & Operational Conditions
            </label>
            <textarea
              rows={3}
              value={formData.technicalRequirements}
              onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
              placeholder="Mention voltage, current, temperature class, enclosure IP rating, certification requirements (CE, ATEX, IS), or physical footprint constraints."
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="block font-bold text-slate-700 mb-1">
              Manufacturer / Brand Preference (Optional)
            </label>
            <input
              type="text"
              value={formData.manufacturerPreference}
              onChange={(e) => setFormData({ ...formData, manufacturerPreference: e.target.value })}
              placeholder="e.g. Siemens, ABB, Omron, or Best Available Equivalent"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div className="sm:col-span-6">
            <label className="block font-bold text-slate-700 mb-1">
              Target Delivery Date (Optional)
            </label>
            <input
              type="date"
              value={formData.requiredDeliveryDate}
              onChange={(e) => setFormData({ ...formData, requiredDeliveryDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>
        </div>
      </div>

      {/* Customer Identification */}
      <div>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <h3 className="text-base font-bold text-slate-900">
            2. Customer & Delivery Information
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Contact Person *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Arvind Mehta"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Sun Petrochemicals"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Business Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. arvind@sunpetro.com"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Phone / Mobile *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9845012345"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Destination City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Dahej / Bengaluru"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Pincode
            </label>
            <input
              type="text"
              maxLength={6}
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              placeholder="392130"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>
        </div>
      </div>

      {/* Sourcing SLA notice */}
      <div className="pt-4 border-t border-slate-200 space-y-4">
        <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong className="block font-bold mb-1">Sourcing Notice:</strong>
          <span>Availability, brand verification, price, and expected delivery lead time are confirmed strictly following review by our procurement engineering network. We do not commit to delivery dates without distributor stock confirmation.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <span className="text-xs text-slate-500">
            Standard catalogue items? <Link href="/rfq" className="text-[#0B2D5B] font-bold underline">Use Standard RFQ Form</Link>
          </span>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0B2D5B] hover:bg-blue-900 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Registering Custom Requirement...</span>
              </>
            ) : (
              <>
                <span>Submit Sourcing Requirement</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
