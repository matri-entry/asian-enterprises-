import { NextRequest, NextResponse } from 'next/server';
import { saveLead, UPLOADS_DIR } from '@/lib/storage';
import fs from 'fs';
import path from 'path';

const ALLOWED_EXTENSIONS = ['.pdf', '.xlsx', '.xls', '.csv'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const fullName = formData.get('fullName') as string;
    const companyName = formData.get('companyName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const gstin = (formData.get('gstin') as string) || '';
    const city = formData.get('city') as string;
    const pincode = formData.get('pincode') as string;
    const projectTitle = (formData.get('projectTitle') as string) || '';
    const requiredDeliveryDate = (formData.get('requiredDeliveryDate') as string) || '';
    const additionalNotes = (formData.get('additionalNotes') as string) || '';
    const file = formData.get('boqFile') as File | null;

    // Validate customer fields
    if (!fullName?.trim()) return NextResponse.json({ error: 'Contact full name is required.' }, { status: 400 });
    if (!companyName?.trim()) return NextResponse.json({ error: 'Company or business name is required.' }, { status: 400 });
    if (!email?.trim() || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'A valid business email is required.' }, { status: 400 });
    if (!phone?.trim() || phone.replace(/\D/g, '').length < 10) return NextResponse.json({ error: 'A valid 10-digit phone number is required.' }, { status: 400 });
    if (!city?.trim()) return NextResponse.json({ error: 'Delivery city is required.' }, { status: 400 });
    if (!pincode?.trim() || !/^\d{6}$/.test(pincode.trim())) return NextResponse.json({ error: 'A valid 6-digit delivery pincode is required.' }, { status: 400 });

    if (!file) {
      return NextResponse.json({ error: 'Please select a BOQ document file (PDF, XLSX, XLS, or CSV).' }, { status: 400 });
    }

    const originalName = file.name;
    const ext = path.extname(originalName).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json({ error: `Invalid file format. Allowed formats: ${ALLOWED_EXTENSIONS.join(', ')}` }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size exceeds maximum permitted limit of 10 MB.' }, { status: 400 });
    }

    // Save file safely outside public directory
    const buffer = Buffer.from(await file.arrayBuffer());
    const sanitizedBase = path.basename(originalName, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueFileName = `BOQ_${Date.now()}_${sanitizedBase}${ext}`;
    const destinationPath = path.join(UPLOADS_DIR, uniqueFileName);

    fs.writeFileSync(destinationPath, buffer);

    const lead = saveLead({
      type: 'BOQ_UPLOAD',
      source: 'Project Bulk BOQ Upload Portal',
      customer: {
        fullName: fullName.trim(),
        companyName: companyName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        gstin: gstin.trim().toUpperCase() || undefined,
        city: city.trim(),
        pincode: pincode.trim()
      },
      projectTitle: projectTitle.trim() || 'Project Bill of Quantities',
      requiredDeliveryDate: requiredDeliveryDate.trim() || undefined,
      additionalNotes: additionalNotes.trim() || undefined,
      document: {
        originalFileName: originalName,
        savedFileName: uniqueFileName,
        fileSize: file.size,
        mimeType: file.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString()
      }
    });

    return NextResponse.json({
      success: true,
      boqId: lead.id,
      message: `Your BOQ document (${lead.id}) has been uploaded securely. Our engineering procurement team will dissect line items, verify supplier availability, and return a consolidated commercial quote.`
    });
  } catch (error: any) {
    console.error('BOQ upload error:', error);
    return NextResponse.json({ error: 'Server error while processing BOQ upload.' }, { status: 500 });
  }
}
