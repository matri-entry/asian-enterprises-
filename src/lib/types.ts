export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Requirement Qualified'
  | 'Supplier Pricing Pending'
  | 'Quotation Sent'
  | 'Negotiation'
  | 'Won'
  | 'Lost';

export type EnquiryType = 'RFQ' | 'BOQ_UPLOAD' | 'CUSTOM_SOURCING' | 'GENERAL_CONTACT' | 'WHATSAPP_CLICK';

export interface RFQLineItem {
  productName: string;
  category?: string;
  quantity: number | string;
  unit: string;
  technicalSpecs?: string;
  brandPreference?: string;
}

export interface CustomerDetails {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  gstin?: string;
  city: string;
  state?: string;
  pincode: string;
}

export interface StoredDocument {
  originalFileName: string;
  savedFileName: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
}

export interface LeadRecord {
  id: string; // e.g., AE-RFQ-2026-0001
  type: EnquiryType;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  source: string;
  customer: CustomerDetails;
  items?: RFQLineItem[];
  projectTitle?: string;
  requiredDeliveryDate?: string;
  additionalNotes?: string;
  document?: StoredDocument;
  assignedOwner?: string;
  estimatedMarginPercent?: number;
  internalNotes?: string[];
}
