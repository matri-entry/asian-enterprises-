'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  UploadCloud, 
  FileCheck, 
  AlertCircle, 
  Loader2, 
  FileText, 
  CheckCircle2,
  Lock,
  MessageCircle,
  Building2,
  Calendar,
  X
} from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function BOQUploadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    gstin: '',
    city: '',
    pincode: '',
    projectTitle: '',
    requiredDeliveryDate: '',
    additionalNotes: ''
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ boqId: string; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!['pdf', 'xlsx', 'xls', 'csv'].includes(ext || '')) {
        setErrorMsg('Invalid file format. Only PDF, XLSX, XLS, and CSV files are accepted.');
        setSelectedFile(null);
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('File size exceeds the 10 MB limit. Please compress or split the BOQ.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all mandatory contact information.');
      return;
    }
    if (!formData.city.trim() || !formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode.trim())) {
      setErrorMsg('Please specify a valid delivery city and 6-digit pincode.');
      return;
    }
    if (!selectedFile) {
      setErrorMsg('Please attach your BOQ document file (PDF, XLSX, XLS, or CSV).');
      return;
    }

    setSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        data.append(k, v);
      });
      data.append('boqFile', selectedFile);

      const res = await fetch('/api/boq-upload', {
        method: 'POST',
        body: data
      });

      const resJson = await res.json();
      if (!res.ok) {
        throw new Error(resJson.error || 'Failed to process BOQ upload.');
      }

      setSuccessData({
        boqId: resJson.boqId,
        message: resJson.message
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Error uploading BOQ file.');
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
          BOQ Uploaded Securely
        </span>

        <h3 className="text-2xl font-black text-slate-900 mt-4 mb-2">
          BOQ Reference: <span className="text-[#0B2D5B]">{successData.boqId}</span>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-6">
          {successData.message}
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left mb-8 space-y-2 text-xs text-slate-700">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Uploaded File:</span>
            <span className="font-bold text-slate-900">{selectedFile?.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Target Project:</span>
            <span className="font-semibold">{formData.projectTitle || 'General Project BOQ'}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Site Location:</span>
            <span className="font-semibold">{formData.city} - {formData.pincode}</span>
          </div>
          <div className="flex items-center gap-2 pt-1 text-slate-500 text-[11px]">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Stored in encrypted non-public storage. Accessed solely by Asian Enterprises procurement engineers.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${encodeURIComponent(`Hello Asian Enterprises, I have uploaded project BOQ reference ${successData.boqId} for ${formData.companyName}. Please acknowledge.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Notify Commercial Desk</span>
          </a>

          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-md transition-colors"
          >
            Back to Catalogue
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
            <strong className="block font-bold">Upload Error:</strong>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}

      {/* File Upload Drop Zone */}
      <div>
        <label className="block text-sm font-bold text-slate-900 mb-2">
          Attach Project BOQ / BOM Document *
        </label>
        <p className="text-xs text-slate-500 mb-4">
          Upload your electrical single line diagram (SLD), bill of quantities, tender schedule, or material estimate.
        </p>

        <div className="border-2 border-dashed border-slate-300 hover:border-[#0B2D5B] rounded-xl p-8 text-center bg-slate-50/50 transition-colors">
          <input
            type="file"
            id="boqFileInput"
            accept=".pdf,.xlsx,.xls,.csv"
            onChange={handleFileChange}
            className="hidden"
          />

          {!selectedFile ? (
            <label htmlFor="boqFileInput" className="cursor-pointer block">
              <UploadCloud className="w-12 h-12 text-[#0B2D5B] mx-auto mb-3" />
              <span className="text-sm font-bold text-[#0B2D5B] hover:text-[#F05A28] block mb-1">
                Click to browse or drag and drop your document
              </span>
              <span className="text-xs text-slate-500 block">
                Supported formats: PDF, Microsoft Excel (.xlsx, .xls), or CSV (Max size: 10 MB)
              </span>
            </label>
          ) : (
            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-left">
                <FileText className="w-8 h-8 text-[#F05A28]" />
                <div>
                  <span className="font-bold text-slate-900 text-xs block truncate max-w-[220px]">
                    {selectedFile.name}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFile(null)}
                className="text-slate-400 hover:text-rose-600 p-1"
                title="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project & Client Identification */}
      <div>
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <Building2 className="w-5 h-5 text-[#0B2D5B]" />
          <h3 className="text-base font-bold text-slate-900">
            Project & Commercial Contact Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Project Title / Site Name (Optional)
            </label>
            <input
              type="text"
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              placeholder="e.g. Phase 2 Factory Expansion"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Company / Contracting Firm *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Bharat Infra Projects Ltd"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Contact Person *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Suresh Nair"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Corporate Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. purchase@bharatinfra.com"
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
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9811223344"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              GSTIN (Optional)
            </label>
            <input
              type="text"
              value={formData.gstin}
              onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
              placeholder="29AAAAA0000A1Z5"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 uppercase focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Project Delivery City *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Bengaluru / Neemrana"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Site Pincode *
            </label>
            <input
              type="text"
              required
              maxLength={6}
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              placeholder="560068"
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Target Site Commissioning Date (Optional)
            </label>
            <input
              type="date"
              value={formData.requiredDeliveryDate}
              onChange={(e) => setFormData({ ...formData, requiredDeliveryDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
            />
          </div>
        </div>

        <div className="mt-5 text-xs">
          <label className="block font-bold text-slate-700 mb-1">
            Specific Brand Approved Vendor List (AVL) or Packaging Notes
          </label>
          <textarea
            rows={3}
            value={formData.additionalNotes}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
            placeholder="List any mandatory brand makes, inspection agency requirements, or special transit conditions."
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
          />
        </div>
      </div>

      {/* Security Note & Submit */}
      <div className="pt-4 border-t border-slate-200 space-y-4">
        <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-[#0B2D5B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0B2D5B] block font-bold">Confidential Commercial Guarantee:</strong>
            <span>Your project drawings and BOQ documents are stored privately in non-public storage. Asian Enterprises never exposes customer engineering schedules to unauthorized parties.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <span className="text-xs text-slate-500">
            Prefer line-item entry? <Link href="/rfq" className="text-[#0B2D5B] font-bold underline">Use Online RFQ Builder</Link>
          </span>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#F05A28] hover:bg-[#D94819] disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-md transition-all flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading BOQ Document...</span>
              </>
            ) : (
              <>
                <span>Submit BOQ for Commercial Quotation</span>
                <UploadCloud className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
