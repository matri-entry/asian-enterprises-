export interface CompanyDetails {
  brandName: string;
  shortName: string;
  category: string;
  tagline: string;
  subtitle: string;
  registeredName: string;
  gstin: string;
  mainOperations: {
    city: string;
    state: string;
    locality: string;
    address: string;
    pincode: string;
    fullAddress: string;
    googleMapsSearchUrl: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  contact: {
    primaryPhone: string;
    primaryPhoneDisplay: string;
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    clickToCall: string;
    clickToEmail: string;
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
  brandName: "GURUDEV ENTERPRISE",
  shortName: "Gurudev Enterprise",
  category: "Industrial Electrical Equipment & MRO Supplier",
  tagline: "Industrial Electrical Equipment & MRO Supplier in Bengaluru",
  subtitle: "Supplying industrial electrical equipment, switchgear, power cables, electrical panels, lighting and MRO products to factories, contractors and businesses in Bengaluru and across India.",
  registeredName: "GURUDEV ENTERPRISE",
  gstin: "29EVPPR9281E1ZN",
  mainOperations: {
    city: "Bengaluru",
    state: "Karnataka",
    locality: "Bommanahalli",
    address: "Ground Floor, WJ4G+Q43 Mantu Kumar, 259/3, Virat Nagar, Bommanahalli",
    pincode: "560068",
    fullAddress: "Ground Floor, WJ4G+Q43 Mantu Kumar, 259/3, Virat Nagar, Bommanahalli, Bengaluru, Karnataka 560068, India",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Ground+Floor+259%2F3+Virat+Nagar+Bommanahalli+Bengaluru+560068",
    coordinates: {
      latitude: "12.9015",
      longitude: "77.6325"
    }
  },
  contact: {
    primaryPhone: "+918197240584",
    primaryPhoneDisplay: "+91 81972 40584",
    email: "gurudeventerprise.blr@gmail.com",
    whatsappNumber: "918197240584",
    whatsappDisplay: "+91 81972 40584",
    clickToCall: "tel:+918197240584",
    clickToEmail: "mailto:gurudeventerprise.blr@gmail.com"
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 7:00 PM",
    timezone: "IST"
  },
  panIndiaDeliveryNote: "Supplying manufacturing plants, infrastructure projects, and industrial facilities across Bengaluru, Karnataka, and pan-India through dependable freight and logistics partners.",
  sourcingModelSummary: "Gurudev Enterprise operates an agile B2B procurement network combining project-ready inventory for fast-moving items with verified manufacturer and authorized distributor connections for comprehensive bill-of-materials sourcing."
};
