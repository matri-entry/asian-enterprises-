import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      gstin,
      city,
      pincode,
      productName,
      technicalRequirements,
      quantity,
      unit,
      manufacturerPreference,
      requiredDeliveryDate,
      additionalNotes
    } = body;

    if (!fullName?.trim() || !companyName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Please fill in all mandatory customer contact fields.' }, { status: 400 });
    }
    if (!productName?.trim()) {
      return NextResponse.json({ error: 'Product or equipment name is required for custom sourcing.' }, { status: 400 });
    }

    const lead = saveLead({
      type: 'CUSTOM_SOURCING',
      source: 'Custom Industrial Sourcing Desk',
      customer: {
        fullName: fullName.trim(),
        companyName: companyName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        gstin: gstin ? gstin.trim().toUpperCase() : undefined,
        city: city?.trim() || 'Pan-India',
        pincode: pincode?.trim() || '000000'
      },
      items: [
        {
          productName: productName.trim(),
          quantity: quantity ? String(quantity).trim() : '1',
          unit: unit ? String(unit).trim() : 'Units',
          technicalSpecs: technicalRequirements ? String(technicalRequirements).trim() : undefined,
          brandPreference: manufacturerPreference ? String(manufacturerPreference).trim() : undefined
        }
      ],
      requiredDeliveryDate: requiredDeliveryDate ? String(requiredDeliveryDate).trim() : undefined,
      additionalNotes: additionalNotes ? String(additionalNotes).trim() : undefined
    });

    return NextResponse.json({
      success: true,
      sourcingId: lead.id,
      message: `Your custom sourcing requirement (${lead.id}) has been registered. Our multi-category supplier network will identify availability, lead time, and best landed pricing.`
    });
  } catch (error: any) {
    console.error('Custom sourcing API error:', error);
    return NextResponse.json({ error: 'Server error processing custom sourcing request.' }, { status: 500 });
  }
}
