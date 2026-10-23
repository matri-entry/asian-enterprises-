export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: string;
  subcategories: string[];
  keyHighlights: string[];
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "cat-1",
    slug: "electrical-panels",
    title: "Electrical Panels & Distribution Equipment",
    shortTitle: "Electrical Panels",
    description: "Engineered low-tension and high-tension electrical panels, power control centres, motor control centres, and busduct systems up to 6300A for industrial power distribution.",
    image: "/images/electrical_panels.jpg",
    icon: "LayoutGrid",
    subcategories: [
      "Power Control Center Panels (PCC)",
      "Motor Control Center Panels (MCC)",
      "Drawout MCC Panels",
      "Power Factor Correction Panels (APFC)",
      "ACDB & DCDB Distribution Panels",
      "Lighting Distribution Boards & DBs",
      "Feeder Pillars & Plug Socket Boxes",
      "AMF & Synchronizing Panels",
      "Changeover & AC Drive Panels",
      "HT VCB Panels & Busducts up to 6300A"
    ],
    keyHighlights: [
      "Built to customer project specifications & single-line diagrams (SLDs)",
      "Busduct capacity engineered up to 6300A",
      "Equipped with verified industrial switchgear & safety interlocks"
    ]
  },
  {
    id: "cat-2",
    slug: "wires-and-cables",
    title: "Wires and Cables",
    shortTitle: "Wires & Cables",
    description: "Complete spectrum of LV, MV, EHV power transmission cables, fire survival cables, zero halogen building wires, and specialized industrial cables.",
    image: "/images/wires_and_cables.jpg",
    icon: "Cable",
    subcategories: [
      "L.V. PVC & XLPE Power Cables (Copper / Aluminium)",
      "M.V. Power Cables up to 33 kV",
      "EHV Cables (66 kV to 220 kV)",
      "Fire Survival (FS) & Zero Halogen (LSZH) Cables",
      "Building Wires (FR / FRLS / FRZH / FRLF / FRFS)",
      "Single Core & Multi-Core Industrial Flexibles",
      "Screened & Unscreened Instrumentation Cables",
      "Submersible, Flat & Round Pump Cables",
      "Welding, Coaxial, LAN CAT-5E/6 & Rubber Cables",
      "Specialty Cables (Marine, Solar AC/DC, Oil & Gas)"
    ],
    keyHighlights: [
      "High dielectric strength with certified IS standards",
      "Flame retardant low smoke (FRLS) insulation options",
      "Full coil and drum cut lengths available for project dispatches"
    ]
  },
  {
    id: "cat-3",
    slug: "switchgear-and-protection",
    title: "Switchgear and Protection Devices",
    shortTitle: "Switchgear & Protection",
    description: "Industrial circuit breakers, contactors, motor protection circuit breakers, electronic timers, relays, and HRC fuses for machinery and panel protection.",
    image: "/images/switchgear.jpg",
    icon: "ShieldAlert",
    subcategories: [
      "Air Circuit Breakers (ACB) & Molded Case (MCCB)",
      "Miniature Circuit Breakers (MCB) & Isolators",
      "Residual Current Devices: RCCB (ELCB) & RCBO",
      "Motor Protection Circuit Breakers (MPCB)",
      "Heavy Duty Contactors & Auxiliary Contacts",
      "Switch Fuse Units (SFU) & HRC Fuses",
      "Under Voltage (UV) & Overload Relays",
      "Electronic Timers & Spreader Terminals"
    ],
    keyHighlights: [
      "Protection against short-circuit, overloads, and earth leakage",
      "Modular DIN rail and chassis mount configurations",
      "Supplier connections with premier tier-1 switchgear brands"
    ]
  },
  {
    id: "cat-4",
    slug: "lighting-and-electrical-accessories",
    title: "Lighting and Electrical Accessories",
    shortTitle: "Industrial Lighting",
    description: "High-efficiency industrial floodlights, street lights, flameproof fittings, commercial tile fixtures, and heavy-duty lighting accessories.",
    image: "/images/lighting.jpg",
    icon: "Lightbulb",
    subcategories: [
      "High-Power LED Flood Lights (50W to 1000W)",
      "Industrial LED Street Lights",
      "Flame Proof Well Glass Fittings & Tube Lights",
      "LED 2x2 Cleanroom & Commercial Tile Fittings",
      "Metal Halide & HPSV High-Bay Lamps & Ballasts",
      "Solar Traffic Blinker Lights & Warning Beacons",
      "Heavy Duty Lighting Poles & Brackets"
    ],
    keyHighlights: [
      "Hazardous area flame-proof solutions for chemical/refinery zones",
      "High luminous efficacy and IP65/IP66 outdoor protection",
      "Uniform lumen output with heavy-duty heat sink dissipation"
    ]
  },
  {
    id: "cat-5",
    slug: "cable-glands-lugs-terminals",
    title: "Cable Glands, Lugs and Terminal Blocks",
    shortTitle: "Glands & Terminals",
    description: "Brass & PVC cable glands, copper/aluminium terminal lugs, DIN rail terminal blocks, busbar insulators, and cable termination accessories.",
    image: "/images/cable_glands_lugs.jpg",
    icon: "Cpu",
    subcategories: [
      "Brass Double Compression & Single Compression Glands",
      "PVC Weatherproof Cable Glands",
      "Copper & Aluminium Terminal Lugs & Ferrules",
      "Heavy Duty DIN Rail Terminal Blocks (Connectors)",
      "Busbar Support Insulators (DMC / SMC)",
      "Heat Shrinkable Sleeves & PVC Ferrule Markers",
      "Insulation Tapes, Empire Tape & Rubber Splicing Tape",
      "Cable Ties & Marker Ribbons"
    ],
    keyHighlights: [
      "Vibration-proof cable terminations and moisture sealing",
      "High conductivity electrolytic copper & aluminium lugs",
      "Full range of metric, PG, and NPT thread gland options"
    ]
  },
  {
    id: "cat-6",
    slug: "earthing-and-grounding",
    title: "Earthing and Grounding Products",
    shortTitle: "Earthing & Grounding",
    description: "Structural earthing materials, maintenance-free chemical electrodes, GI & copper plates, operating rods, and lightning arresters for facility safety.",
    image: "/images/earthing_products.jpg",
    icon: "Zap",
    subcategories: [
      "Chemical Earthing Electrodes & Carbon Backfill Compound",
      "GI Earthing Pipes & Perforated Electrodes",
      "GI Earth Plates & Pure Copper Earth Plates",
      "Copper Strips & Galvanized GI Patti",
      "Lightning Arresters & Early Streamer Emission Terminals",
      "AB Switches & High Voltage Porcelain Insulators",
      "High Voltage Operating Rods & Discharge Rods",
      "Electrical Safety Rubber Mats (IS 15652 certified)",
      "11KV & 33KV Tested Rubber Hand Gloves"
    ],
    keyHighlights: [
      "Low soil resistance dissipation for substations and factories",
      "Heavy-duty hot-dip galvanized and electrolytically refined copper",
      "Personal safety PPE rated up to high industrial voltages"
    ]
  },
  {
    id: "cat-7",
    slug: "cable-trays-and-management",
    title: "Cable Trays and Cable Management",
    shortTitle: "Cable Trays & Raceways",
    description: "Perforated and ladder-type cable trays, PVC channels, flexible conduits, and routing enclosures for clean plant installations.",
    image: "/images/cable_trays.jpg",
    icon: "Layers",
    subcategories: [
      "Perforated Cable Trays (Pre-Galvanized & Hot-Dip Galvanized)",
      "Ladder Type Heavy-Duty Cable Trays",
      "PVC Wiring Ducts & Slotted Cable Channels",
      "PVC & GI Flexible Metal Conduits",
      "Cable Tray Bends, Tees, Reducers & Coupler Plates",
      "Unistrut Channels & Cantilever Support Arms"
    ],
    keyHighlights: [
      "Rigid load-bearing structural capacities for heavy power runs",
      "Corrosion-resistant finishes for harsh chemical environments",
      "Complete mounting accessories, hardware, and fasteners"
    ]
  },
  {
    id: "cat-8",
    slug: "industrial-safety-products",
    title: "Industrial Safety Products",
    shortTitle: "Safety & PPE",
    description: "Industrial personal protective equipment (PPE), fire extinguishers, hydrant valves, safety helmets, high-visibility jackets, and plant protection.",
    image: "/images/safety_products.jpg",
    icon: "HardHat",
    subcategories: [
      "Fire Extinguishers (ABC Dry Powder, CO2, Foam, Clean Agent)",
      "Fire Hydrant Landing Valves, Hoses & Branch Pipes",
      "Industrial Safety Helmets (ISI marked) & Ratchet Adjusters",
      "High-Visibility Reflective Safety Jackets",
      "Safety Goggles & Impact Resistant Face Shields",
      "Steel-Toe Industrial Safety Shoes & Ergonomic Work Boots",
      "Fall Protection Safety Nets & Full Body Safety Harnesses",
      "Ceramic Fiber Cloth & Asbestos-Free Fiberglass Blankets"
    ],
    keyHighlights: [
      "Compliance with industrial safety and fire code norms",
      "Essential protection for shop floors, construction sites, and EPC operations",
      "Available in bulk consignments for turnkey project staffing"
    ]
  },
  {
    id: "cat-9",
    slug: "tools-and-testing-instruments",
    title: "Tools and Testing Instruments",
    shortTitle: "Testing & Tools",
    description: "Precision calibration meters, digital insulation testers (Megger), clamp meters, earth testers, crimping tools, and industrial maintenance gear.",
    image: "/images/testing_instruments.jpg",
    icon: "Wrench",
    subcategories: [
      "Digital Multimeters & True-RMS Clamp Meters",
      "Digital Insulation Resistance Testers (Megger Meters)",
      "Digital Earth Resistance Testers (4-wire / 3-wire)",
      "ELCB / RCD Trip Testers & Socket Checkers",
      "Digital Energy Meters & Panel Hour Counters",
      "Digital Water Flow Meters",
      "Hydraulic & Ratchet Cable Lug Crimping Tools",
      "Aircraft Hand Tools, Wire Strippers & Cable Cutters"
    ],
    keyHighlights: [
      "High measurement accuracy for commissioning and preventative maintenance",
      "Rugged drop-tested cases built for field environments",
      "Calibrated units suitable for third-party inspection audits"
    ]
  },
  {
    id: "cat-10",
    slug: "pipes-fittings-and-fasteners",
    title: "Pipes, Fittings and Fasteners",
    shortTitle: "Pipes & Fasteners",
    description: "Stainless steel and MS tubular pipes, TMT bars, braided hoses, brass fittings, gaskets, seals, and high-tensile stainless steel fasteners.",
    image: "/images/pipes_fasteners.jpg",
    icon: "Nut",
    subcategories: [
      "Stainless Steel (SS 304 / SS 316) Pipes & Tubing",
      "Mild Steel (M.S.) Seamless & ERW Industrial Pipes",
      "TMT Reinforcement Steel Bars",
      "SS Braided Flexible Metal Hose Pipes",
      "Brass Pipe Fittings & Precision Connectors",
      "M.S. & S.S. Elbows, Tees, Flanges & Reducers",
      "PU (Polyurethane) & PVC Pneumatic Tubing & Push Fittings",
      "Industrial Gaskets, O-Rings & High-Pressure Oil Seals",
      "SS Hex Nut Bolts, Studs, Plain & Spring Washers",
      "SS U-Bolts, Dome Bolts, Nylock Nuts & CSK Self-Tapping Screws"
    ],
    keyHighlights: [
      "High tensile strength and certified corrosion resistance",
      "Standard and customized dimensional threading (Metric & BSW)",
      "Bulk project packaging for infrastructure and plant assembly"
    ]
  },
  {
    id: "cat-11",
    slug: "sensors-transformers-components",
    title: "Sensors, Transformers and Industrial Components",
    shortTitle: "Sensors & Components",
    description: "Industrial sensors, automation controllers, current transformers, automatic voltage regulators, thyristors, and facility sirens.",
    image: "/images/sensors_transformers.jpg",
    icon: "Radio",
    subcategories: [
      "Inductive Proximity Sensors & Optical Photoelectric Sensors",
      "Burner Controllers & UV Flame Photocells",
      "Temperature Sensors (RTD Pt100 / Thermocouples)",
      "Industrial Sirens (Electronic Hooters) & Flashing Beacons",
      "Revolving Aviation Lights & Multi-Tier Tower Lights",
      "Current Transformers (C.T. Coils) & Potential Transformers",
      "Control Transformers, Line Reactors & Stabilizers / CVTs",
      "Solid State Relays (SSR) & High-Speed Micro Relays",
      "Stud Thyristors, Power Diodes & Bridge Rectifiers",
      "SMPS Industrial Power Supplies & Automatic Voltage Regulators (AVR)",
      "Industrial Enclosure Cooling Fans & Transformer Insulating Oil"
    ],
    keyHighlights: [
      "Continuous-duty rated for demanding 24/7 automation lines",
      "High noise immunity against plant electromagnetic interference",
      "Wide voltage input ranges with integrated surge protection"
    ]
  },
  {
    id: "cat-12",
    slug: "custom-sourcing-and-handling",
    title: "Other Industrial Products and Custom Sourcing",
    shortTitle: "Custom Sourcing & Handling",
    description: "Material handling equipment, hydraulic pallet trucks, 55-ton hydraulic jacks, scaffolding accessories, chain slings, and bespoke procurement.",
    image: "/images/material_handling.jpg",
    icon: "Truck",
    subcategories: [
      "Hydraulic Hand Pallet Trucks (2.5T / 3.0T / 5.0T capacity)",
      "55-Ton Aluminum Hydraulic Jacks & Single Cylinder Lifting Jacks",
      "Scaffolding Accessories: U-Jacks, Base Jacks & Shuttering Clamps",
      "Scaffolding Couplers (Swivel, Fixed Forged, Sheet Pressed)",
      "Anchor Nuts, Wing Nuts & Tie Rods",
      "Flat Polyester Webbing Slings & Heavy Duty Alloy Chain Slings",
      "Industrial Gas Apparatus & Argon Welding Torches",
      "Industrial Adhesives, Fevicol Rubber Sealants & Lubricating CRC Sprays",
      "Custom Bill-of-Materials (BOM) & Hard-to-Find Component Sourcing"
    ],
    keyHighlights: [
      "Single-window coordination for non-standard equipment",
      "Supplier network leveraged for competitive pricing across India",
      "Full quotation provided before order commitment"
    ]
  }
];
