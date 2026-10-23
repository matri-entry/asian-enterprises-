import fs from 'fs';
import path from 'path';
import { LeadRecord, LeadStatus } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
export const UPLOADS_DIR = path.join(process.cwd(), 'uploads');

function ensureDirectories() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function getAllLeads(): LeadRecord[] {
  ensureDirectories();
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading leads file:', error);
    return [];
  }
}

export function saveLead(leadData: Omit<LeadRecord, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: LeadStatus }): LeadRecord {
  ensureDirectories();
  const leads = getAllLeads();
  const year = new Date().getFullYear();
  const prefix = leadData.type === 'BOQ_UPLOAD' ? 'AE-BOQ' : leadData.type === 'CUSTOM_SOURCING' ? 'AE-SRC' : 'AE-RFQ';
  const idNumber = String(leads.length + 1).padStart(4, '0');
  const id = `${prefix}-${year}-${idNumber}`;
  
  const now = new Date().toISOString();
  const newLead: LeadRecord = {
    ...leadData,
    id,
    status: leadData.status || 'New',
    createdAt: now,
    updatedAt: now,
    assignedOwner: leadData.assignedOwner || 'Sales Desk (Bengaluru)',
    internalNotes: leadData.internalNotes || []
  };

  leads.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return newLead;
}

export function updateLeadStatus(id: string, newStatus: LeadStatus, note?: string): LeadRecord | null {
  ensureDirectories();
  const leads = getAllLeads();
  const idx = leads.findIndex(l => l.id === id);
  if (idx === -1) return null;

  leads[idx].status = newStatus;
  leads[idx].updatedAt = new Date().toISOString();
  if (note) {
    leads[idx].internalNotes = leads[idx].internalNotes || [];
    leads[idx].internalNotes!.push(`[${new Date().toISOString()}] ${note}`);
  }

  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return leads[idx];
}
