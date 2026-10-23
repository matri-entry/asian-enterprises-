export interface CompanyDetails {
  brandName: string;
  tagline: string;
  subtitle: string;
  previousBrand: string;
  registeredName: string;
  gstin: string;
  mainOperations: {
    city: string;
    state: string;
    address: string;
    pincode: string;
    fullAddress: string;
    googleMapsSearchUrl: string;
  };
  salesOffice: {
    city: string;
    state: string;
    note: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    primaryPhoneDisplay: string;
    secondaryPhoneDisplay: string;
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
  };
  businessHours: {
    days: string;
    hours: string;
    timezone: string;
  };
  panIndiaDeliveryNote: string;
  sourcingModelSummary: string;
}

export const COMPANY: CompanyDetails = {
  brandName: "ASIAN ENTERPRISES",
  tagline: "Your Trusted Partner for Industrial Procurement",
  subtitle: "Electrical products, industrial components and multi-category sourcing for businesses across India. Share your requirement and receive a tailored quotation from our team.",
  previousBrand: "Krish Enterprise",
  registeredName: "ASIAN ENTERPRISES",
  gstin: "29OEJPK6031Q1ZI",
  mainOperations: {
    city: "Bengaluru",
    state: "Karnataka",
    address: "No.: 18/1, GMR Tower, 14th Main Begur Road, Hongasandra",
    pincode: "560068",
    fullAddress: "No.: 18/1, GMR Tower, 14th Main Begur Road, Hongasandra, Bengaluru, Karnataka - 560068",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=18%2F1+GMR+Tower+14th+Main+Begur+Road+Hongasandra+Bengaluru+560068"
  },
  salesOffice: {
    city: "Jaipur",
    state: "Rajasthan",
    note: "Dedicated regional sales and client coordination office serving Northern and Western industrial corridors. (Direct facility address available upon request / commercial onboarding)"
  },
  contact: {
    primaryPhone: "+918619566149",
    secondaryPhone: "+918197240584",
    primaryPhoneDisplay: "+91 86195 66149",
    secondaryPhoneDisplay: "+91 81972 40584",
    email: "admin@asianenterprise.in",
    whatsappNumber: "918619566149",
    whatsappDisplay: "+91 86195 66149"
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 7:00 PM",
    timezone: "IST"
  },
  panIndiaDeliveryNote: "Supplying manufacturing plants, infrastructure projects, and industrial facilities across all Indian states and Union Territories through dependable freight and logistics partners.",
  sourcingModelSummary: "Asian Enterprises operates an agile B2B procurement network combining project-ready inventory for fast-moving items with direct manufacturer and authorized distributor connections for comprehensive bill-of-materials sourcing."
};
