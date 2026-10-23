'use client';

import React, { useState, useEffect } from 'react';
import { LeadRecord, LeadStatus } from '@/lib/types';
import { 
  Lock, 
  Search, 
  Filter, 
  RefreshCw, 
  FileText, 
  Phone, 
  Mail, 
  Building2, 
  Calendar,
  CheckCircle2,
  Clock,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const STATUS_OPTIONS: LeadStatus[] = [
  'New',
  'Contacted',
  'Requirement Qualified',
  'Supplier Pricing Pending',
  'Quotation Sent',
  'Negotiation',
  'Won',
  'Lost'
];

export default function LeadsDashboardClient() {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Filters
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected lead for detail view
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [newNote, setNewNote] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchLeads = async (key: string) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch(`/api/admin/leads?key=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed. Please verify sales desk passkey.');
      }
      setLeads(data.leads || []);
      setIsAuthenticated(true);
      if (data.leads?.length > 0 && !selectedLead) {
        setSelectedLead(data.leads[0]);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error loading leads.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkey.trim()) return;
    fetchLeads(passkey.trim());
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/admin/leads?key=${encodeURIComponent(passkey)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: leadId,
          status: newStatus,
          note: `Status updated to ${newStatus}`
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update status');

      // Update state locally
      setLeads(leads.map(l => l.id === leadId ? data.lead : l));
      if (selectedLead?.id === leadId) {
        setSelectedLead(data.lead);
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleAddNote = async (leadId: string) => {
    if (!newNote.trim()) return;
    try {
      const res = await fetch(`/api/admin/leads?key=${encodeURIComponent(passkey)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: leadId,
          status: selectedLead?.status,
          note: newNote.trim()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save note');

      setLeads(leads.map(l => l.id === leadId ? data.lead : l));
      setSelectedLead(data.lead);
      setNewNote('');
    } catch (err: any) {
      alert(err.message);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === 'ALL' || l.status === statusFilter;
    const matchesType = typeFilter === 'ALL' || l.type === typeFilter;
    const matchesSearch = 
      searchQuery === '' ||
      l.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.customer.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.customer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.customer.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xl">
        <div className="w-12 h-12 bg-blue-50 text-[#0B2D5B] rounded-xl flex items-center justify-center mx-auto mb-4">
          <Lock className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 text-center mb-1">
          Asian Enterprises Sales Desk
        </h2>
        <p className="text-xs text-slate-500 text-center mb-6">
          Authorized internal portal for commercial inquiry and RFQ management.
        </p>

        {errorMsg && (
          <div className="p-3 mb-4 rounded bg-rose-50 border border-rose-200 text-rose-800 text-xs">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Sales Desk Passkey
            </label>
            <input
              type="password"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              placeholder="Enter authorization key..."
              className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0B2D5B]"
              autoFocus
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Default internal access key: <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0B2D5B]">asian2026</code>
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#0B2D5B] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-xs"
          >
            {loading ? 'Authenticating...' : 'Access Lead Desk'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header Controls */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-1">
            Connected to Live Storage
          </span>
          <h2 className="text-xl font-black text-slate-900">
            Commercial Inquiries & RFQ Pipeline ({leads.length} Total)
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchLeads(passkey)}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-2 text-xs text-rose-600 hover:text-rose-800 font-semibold"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
        <div className="sm:col-span-5 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID, company name, contact, email..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B] bg-white"
          />
        </div>

        <div className="sm:col-span-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B] bg-white font-medium"
          >
            <option value="ALL">All Statuses ({leads.length})</option>
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st} ({leads.filter(l => l.status === st).length})
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-[#0B2D5B] bg-white font-medium"
          >
            <option value="ALL">All Enquiry Types</option>
            <option value="RFQ">RFQ (Online Multi-Item)</option>
            <option value="BOQ_UPLOAD">BOQ Upload (Project File)</option>
            <option value="CUSTOM_SOURCING">Custom Sourcing</option>
            <option value="GENERAL_CONTACT">General Contact</option>
          </select>
        </div>
      </div>

      {/* Main Split Layout: Lead List on Left, Detail on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Lead List */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs max-h-[750px] overflow-y-auto">
          <div className="p-3 border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 flex justify-between">
            <span>Enquiries ({filteredLeads.length})</span>
            <span>Date / Status</span>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No inquiries match current filters.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredLeads.map((lead) => {
                const isSelected = selectedLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`p-4 cursor-pointer transition-colors text-xs ${
                      isSelected ? 'bg-blue-50/70 border-l-4 border-[#0B2D5B]' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono font-bold text-[#0B2D5B]">
                        {lead.id}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'Quotation Sent' ? 'bg-amber-100 text-amber-800' :
                        lead.status === 'Won' ? 'bg-emerald-100 text-emerald-800' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {lead.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-xs truncate">
                      {lead.customer.companyName}
                    </h4>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                      <span>{lead.customer.fullName} &bull; {lead.customer.city}</span>
                      <span className="font-mono text-[10px]">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Lead Detail View */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          {selectedLead ? (
            <div className="space-y-6 text-xs">
              {/* Header */}
              <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono font-bold text-base text-[#0B2D5B]">
                      {selectedLead.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {selectedLead.type}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">
                    Created: {new Date(selectedLead.createdAt).toLocaleString()} &bull; Source: {selectedLead.source}
                  </span>
                </div>

                {/* Status Selector */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-600">Pipeline Status:</span>
                  <select
                    value={selectedLead.status}
                    disabled={updatingStatus}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                    className="px-2.5 py-1.5 rounded-md border border-slate-300 font-bold text-xs bg-white text-[#0B2D5B] focus:ring-2 focus:ring-[#0B2D5B]"
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] block">
                  Customer & Delivery Profile
                </span>
                <div className="grid grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Company Name</span>
                    <strong className="text-slate-900">{selectedLead.customer.companyName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Contact Person</span>
                    <span className="font-semibold">{selectedLead.customer.fullName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email</span>
                    <a href={`mailto:${selectedLead.customer.email}`} className="text-[#0B2D5B] hover:underline font-mono">
                      {selectedLead.customer.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Phone</span>
                    <a href={`tel:${selectedLead.customer.phone}`} className="text-emerald-700 font-bold font-mono">
                      {selectedLead.customer.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Delivery City / Pincode</span>
                    <span>{selectedLead.customer.city} - {selectedLead.customer.pincode}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">GSTIN</span>
                    <span className="font-mono">{selectedLead.customer.gstin || 'Not Provided'}</span>
                  </div>
                </div>
              </div>

              {/* Items or Attached Documents */}
              {selectedLead.items && selectedLead.items.length > 0 && (
                <div className="space-y-2">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] block">
                    Product Requirements ({selectedLead.items.length} Line Items)
                  </span>
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-600">
                        <tr>
                          <th className="py-2 px-3">#</th>
                          <th className="py-2 px-3">Product Name</th>
                          <th className="py-2 px-3">Quantity</th>
                          <th className="py-2 px-3">Specs / Brand</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {selectedLead.items.map((it, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="py-2 px-3 text-slate-400">{idx + 1}</td>
                            <td className="py-2 px-3 font-semibold text-slate-900">{it.productName}</td>
                            <td className="py-2 px-3 font-mono">{it.quantity} {it.unit}</td>
                            <td className="py-2 px-3 text-slate-500">
                              {it.technicalSpecs || '-'} {it.brandPreference ? `(${it.brandPreference})` : ''}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* BOQ Document Info */}
              {selectedLead.document && (
                <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-lg space-y-2">
                  <span className="font-bold text-emerald-800 uppercase tracking-wider text-[11px] block">
                    Attached Project BOQ File
                  </span>
                  <div className="flex items-center justify-between text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-600" />
                      <div>
                        <span className="font-bold text-slate-900 block">{selectedLead.document.originalFileName}</span>
                        <span className="text-[11px] text-slate-500">
                          {(selectedLead.document.fileSize / (1024 * 1024)).toFixed(2)} MB &bull; Securely saved on server
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono bg-white px-2 py-1 rounded border border-emerald-200 text-emerald-800">
                      Private Storage: {selectedLead.document.savedFileName}
                    </span>
                  </div>
                </div>
              )}

              {/* Notes & Follow-ups */}
              {selectedLead.additionalNotes && (
                <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg text-slate-700 text-xs">
                  <strong className="text-amber-900 block font-bold mb-1">Customer Project Notes:</strong>
                  <p>{selectedLead.additionalNotes}</p>
                </div>
              )}

              {/* Internal Notes History & Add Note */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] block">
                  Internal Commercial Follow-up Notes
                </span>

                {selectedLead.internalNotes && selectedLead.internalNotes.length > 0 ? (
                  <div className="space-y-1.5 max-h-40 overflow-y-auto">
                    {selectedLead.internalNotes.map((note, nIdx) => (
                      <div key={nIdx} className="p-2 rounded bg-slate-100 text-slate-700 text-[11px] font-mono">
                        {note}
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-slate-400 text-[11px] italic block">
                    No follow-up notes logged yet.
                  </span>
                )}

                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add follow-up note (e.g. Sent supplier RFQ to Polycab / L&T distributor)..."
                    className="flex-1 px-3 py-1.5 rounded border border-slate-300 text-xs focus:ring-1 focus:ring-[#0B2D5B]"
                  />
                  <button
                    onClick={() => handleAddNote(selectedLead.id)}
                    className="px-4 py-1.5 bg-[#0B2D5B] text-white font-bold rounded text-xs hover:bg-blue-900 transition-colors"
                  >
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400 text-xs">
              Select an enquiry from the list to view its complete commercial details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
