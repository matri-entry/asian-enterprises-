import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://asianenterprise.in'),
  title: {
    default: 'ASIAN ENTERPRISES | B2B Industrial Trading, Sourcing & Procurement India',
    template: '%s | ASIAN ENTERPRISES'
  },
  description: 'Your trusted partner for industrial procurement. Electrical products, power cables, switchgear, safety products, and multi-category sourcing for businesses across India.',
  keywords: [
    'B2B industrial electrical supplier India',
    'industrial switchgear procurement',
    'HT LT power cables supplier Bengaluru',
    'electrical panels PCC MCC APFC',
    'industrial safety equipment BOQ',
    'Asian Enterprises Bengaluru Jaipur',
    'pan-India electrical sourcing'
  ],
  authors: [{ name: 'ASIAN ENTERPRISES' }],
  icons: {
    icon: '/images/symbol.png',
    apple: '/images/symbol.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://asianenterprise.in',
    siteName: 'ASIAN ENTERPRISES',
    title: 'ASIAN ENTERPRISES | Industrial Trading & Procurement',
    description: 'B2B industrial procurement and multi-category sourcing serving customers across India. Main operations in Bengaluru, sales office in Jaipur.',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 341,
        alt: 'Asian Enterprises Logo'
      }
    ]
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': COMPANY.brandName,
  'legalName': COMPANY.registeredName,
  'description': COMPANY.subtitle,
  'url': 'https://asianenterprise.in',
  'logo': 'https://asianenterprise.in/images/logo.png',
  'telephone': COMPANY.contact.primaryPhone,
  'email': COMPANY.contact.email,
  'taxID': COMPANY.gstin,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': COMPANY.mainOperations.address,
    'addressLocality': COMPANY.mainOperations.city,
    'addressRegion': COMPANY.mainOperations.state,
    'postalCode': COMPANY.mainOperations.pincode,
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '12.9038',
    'longitude': '77.6253'
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'opens': '09:00',
    'closes': '19:00'
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'India'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
