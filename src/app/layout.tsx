import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { COMPANY } from '@/data/company';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gurudeventerprise.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gurudev Enterprise | Industrial Electrical Equipment & MRO Supplier in Bengaluru',
    template: '%s | Gurudev Enterprise'
  },
  description: 'Gurudev Enterprise supplies industrial electrical equipment, switchgear, cables, electrical panels, lighting and MRO products to factories, contractors and businesses in Bengaluru.',
  keywords: [
    'Gurudev Enterprise Bengaluru',
    'industrial electrical equipment supplier Bengaluru',
    'MRO supplier Bommanahalli Bengaluru',
    'industrial switchgear procurement',
    'HT LT power cables supplier Bengaluru',
    'electrical panels PCC MCC APFC',
    'industrial safety equipment BOQ Bengaluru',
    'cable trays and earthing products Karnataka'
  ],
  authors: [{ name: COMPANY.brandName }],
  icons: {
    icon: '/images/symbol.png',
    apple: '/images/symbol.png',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: COMPANY.brandName,
    title: 'Gurudev Enterprise | Industrial Electrical Equipment & MRO Supplier in Bengaluru',
    description: 'Gurudev Enterprise supplies industrial electrical equipment, switchgear, cables, electrical panels, lighting and MRO products to factories, contractors and businesses in Bengaluru.',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 341,
        alt: 'Gurudev Enterprise Logo'
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
  'url': SITE_URL,
  'logo': `${SITE_URL}/images/logo.png`,
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
    'latitude': COMPANY.mainOperations.coordinates.latitude,
    'longitude': COMPANY.mainOperations.coordinates.longitude
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'opens': '09:00',
    'closes': '19:00'
  },
  'areaServed': [
    {
      '@type': 'City',
      'name': 'Bengaluru'
    },
    {
      '@type': 'Country',
      'name': 'India'
    }
  ]
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
