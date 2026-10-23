import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/storage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phone, city, message, department } = body;

    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Please provide your name, email, phone, and enquiry message.' }, { status: 400 });
    }

    const lead = saveLead({
      type: 'GENERAL_CONTACT',
      source: `Contact Page (${department || 'General Enquiry'})`,
      customer: {
        fullName: fullName.trim(),
        companyName: companyName?.trim() || 'Not Specified',
        email: email.trim(),
        phone: phone.trim(),
        city: city?.trim() || 'India',
        pincode: '000000'
      },
      additionalNotes: `[Department: ${department || 'General'}] ${message.trim()}`
    });

    return NextResponse.json({
      success: true,
      inquiryId: lead.id,
      message: 'Thank you for reaching out to Asian Enterprises. A member of our commercial team will contact you shortly.'
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error processing enquiry.' }, { status: 500 });
  }
}
