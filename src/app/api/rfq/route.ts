import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/storage';
import { RFQLineItem } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, items, requiredDeliveryDate, additionalNotes } = body;

    // Server-side validation
    if (!customer?.fullName?.trim()) {
      return NextResponse.json({ error: 'Customer full name is required.' }, { status: 400 });
    }
    if (!customer?.companyName?.trim()) {
      return NextResponse.json({ error: 'Company or business name is required.' }, { status: 400 });
    }
    if (!customer?.email?.trim() || !/^\S+@\S+\.\S+$/.test(customer.email)) {
      return NextResponse.json({ error: 'A valid business email address is required.' }, { status: 400 });
    }
    if (!customer?.phone?.trim() || customer.phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ error: 'A valid 10-digit phone/mobile number is required.' }, { status: 400 });
    }
    if (!customer?.city?.trim()) {
      return NextResponse.json({ error: 'Delivery city is required.' }, { status: 400 });
    }
    if (!customer?.pincode?.trim() || !/^\d{6}$/.test(customer.pincode.trim())) {
      return NextResponse.json({ error: 'A valid 6-digit delivery pincode is required.' }, { status: 400 });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'At least one product requirement must be specified in the RFQ.' }, { status: 400 });
    }

    const cleanItems: RFQLineItem[] = items.map((it: any) => ({
      productName: String(it.productName || '').trim(),
      category: it.category ? String(it.category).trim() : undefined,
      quantity: String(it.quantity || '1').trim(),
      unit: String(it.unit || 'Pieces').trim(),
      technicalSpecs: it.technicalSpecs ? String(it.technicalSpecs).trim() : undefined,
      brandPreference: it.brandPreference ? String(it.brandPreference).trim() : undefined
    })).filter((it: RFQLineItem) => it.productName.length > 0);

    if (cleanItems.length === 0) {
      return NextResponse.json({ error: 'Product name cannot be empty.' }, { status: 400 });
    }

    const lead = saveLead({
      type: 'RFQ',
      source: 'Website Multi-Product RFQ Form',
      customer: {
        fullName: customer.fullName.trim(),
        companyName: customer.companyName.trim(),
        email: customer.email.trim(),
        phone: customer.phone.trim(),
        gstin: customer.gstin ? customer.gstin.trim().toUpperCase() : undefined,
        city: customer.city.trim(),
        state: customer.state ? customer.state.trim() : undefined,
        pincode: customer.pincode.trim()
      },
      items: cleanItems,
      requiredDeliveryDate: requiredDeliveryDate ? String(requiredDeliveryDate).trim() : undefined,
      additionalNotes: additionalNotes ? String(additionalNotes).trim() : undefined
    });

    return NextResponse.json({
      success: true,
      rfqId: lead.id,
      message: `Your Request for Quotation (${lead.id}) has been recorded. Our Bengaluru & Jaipur procurement desk will review specifications with suppliers and send your commercial quote shortly.`
    });
  } catch (error: any) {
    console.error('RFQ submission error:', error);
    return NextResponse.json({ error: 'Internal server error while processing quotation request.' }, { status: 500 });
  }
}
