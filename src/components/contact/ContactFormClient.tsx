'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    department: 'Sales & Quotations',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error sending message.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Message Received Successfully
        </h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for contacting Asian Enterprises. A member of our commercial desk in Bengaluru or Jaipur will review your inquiry and follow up shortly.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setFormData({
              fullName: '',
              companyName: '',
              email: '',
              phone: '',
              city: '',
              department: 'Sales & Quotations',
              message: ''
            });
          }}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5 text-xs">
      <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
        Send an Industrial Enquiry
      </h3>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Anand Pillai"
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Company / Organization
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Pillai Electricals & Panels"
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. anand@pillaipanels.in"
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
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
            placeholder="e.g. 9876543210"
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">
            City / Location
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Bengaluru / Jaipur"
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          />
        </div>

        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Department
          </label>
          <select
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          >
            <option value="Sales & Quotations">Sales & Quotations</option>
            <option value="Bulk BOQ / Project Sourcing">Bulk BOQ / Project Sourcing</option>
            <option value="Vendor / Supplier Partnership">Vendor / Supplier Partnership</option>
            <option value="Accounts & Invoicing">Accounts & Invoicing</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-bold text-slate-700 mb-1">
          Requirement / Message *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your product requirement, specifications, or inquiry details."
          className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <a
          href={`https://wa.me/${COMPANY.contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Need immediate assistance? Chat on WhatsApp</span>
        </a>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#0B2D5B] hover:bg-blue-900 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-xs"
        >
          {submitting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
