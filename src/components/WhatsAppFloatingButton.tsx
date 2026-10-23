'use client';

import React from 'react';
import { COMPANY } from '@/data/company';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const message = encodeURIComponent(
    "Hello Asian Enterprises, I have a B2B requirement to source for my project/factory. Please connect with your procurement team."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/${COMPANY.contact.whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Chat with Asian Enterprises sales team on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-semibold text-xs tracking-wide hidden sm:inline-block">
          WhatsApp Sales
        </span>
      </a>
    </div>
  );
}
