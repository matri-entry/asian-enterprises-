export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  isFastMoving: boolean;
  leadTime: string;
  packagingUnit: string;
  image: string;
  specifications: Record<string, string>;
  verifiedFeatures: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    "id": "prod-101",
    "slug": "power-control-center-panel-pcc",
    "name": "Power Control Center Panel (PCC)",
    "categorySlug": "electrical-panels",
    "categoryName": "Electrical Panels & Distribution Equipment",
    "shortDescription": "Heavy-duty engineered Power Control Center (PCC) panel for industrial power reception and master distribution.",
    "fullDescription": "Custom-engineered Power Control Center (PCC) panel engineered for main power reception from transformers or generators and systematic distribution across factory sub-systems. Designed with compartmentalized sections for air circuit breakers (ACB), busbars, and metering compartments.",
    "isFastMoving": false,
    "leadTime": "Custom engineered per project single-line diagram (SLD)",
    "packagingUnit": "Unit / Panel",
    "image": "/images/electrical_panels.jpg",
    "specifications": {
      "Panel Type": "Compartmentalized Power Control Center",
      "Busbar Capacity": "Up to 6300A (Copper / Aluminium as per requirement)",
      "Standard Compliance": "Specifications verified upon engineering review",
      "Mounting": "Floor-mounted, free-standing enclosure",
      "Ingress Protection": "IP42 to IP55 depending on client requirement"
    },
    "verifiedFeatures": [
      "Custom fabrication based on client single-line diagrams (SLD)",
      "Accommodates major tier-1 switchgear and digital metering systems",
      "Tested busbar fault withstand capabilities"
    ]
  },
  {
    "id": "prod-102",
    "slug": "motor-control-center-panel-mcc",
    "name": "Motor Control Center Panel (MCC)",
    "categorySlug": "electrical-panels",
    "categoryName": "Electrical Panels & Distribution Equipment",
    "shortDescription": "Centralized Motor Control Center (MCC) panel for industrial motor control, protection, and operational safety.",
    "fullDescription": "Motor Control Center (MCC) panels designed for centralized control and protection of high-capacity electric motors across manufacturing plants, water treatment facilities, and process lines. Available in fixed or drawout modules.",
    "isFastMoving": false,
    "leadTime": "Custom engineered per project requirement",
    "packagingUnit": "Unit / Panel",
    "image": "/images/electrical_panels.jpg",
    "specifications": {
      "Panel Type": "Motor Control Center (MCC)",
      "Starter Options": "DOL, Star-Delta, Soft Starter, and VFD integrated",
      "Protection": "Overload, short circuit, phase reversal, and single-phasing",
      "Enclosure": "CRCA sheet steel fabricated with powder coating"
    },
    "verifiedFeatures": [
      "Individual motor starter compartments with mechanical interlocks",
      "Configurable for automation and PLC/SCADA connectivity",
      "High thermal and electro-dynamic withstand strength"
    ]
  },
  {
    "id": "prod-103",
    "slug": "power-factor-correction-panel-apfc",
    "name": "Power Factor Correction Panel (APFC)",
    "categorySlug": "electrical-panels",
    "categoryName": "Electrical Panels & Distribution Equipment",
    "shortDescription": "Automatic Power Factor Correction (APFC) panel with intelligent micro-controller stepping and heavy-duty capacitors.",
    "fullDescription": "Automated capacitor bank panel engineered to maintain unity power factor in industrial facilities, prevent utility penalty charges, and reduce distribution power losses.",
    "isFastMoving": false,
    "leadTime": "Custom assembled as per kVAR sizing requirement",
    "packagingUnit": "Unit / Panel",
    "image": "/images/electrical_panels.jpg",
    "specifications": {
      "Control Type": "Microprocessor-based automatic stepping relay",
      "Capacitor Type": "Heavy-duty MPP / Gas-filled capacitor banks",
      "Detuned Reactors": "7% / 14% harmonic filter detuned reactors available upon request",
      "Cooling": "Forced ventilation with exhaust fans"
    },
    "verifiedFeatures": [
      "Real-time power factor tracking and step switching",
      "Protects internal plant transformers and cables from reactive overloads",
      "Digital readout of power factor, voltage, and current"
    ]
  },
  {
    "id": "prod-104",
    "slug": "ht-vcb-panels-and-busducts",
    "name": "HT VCB Panels & Busducts up to 6300A",
    "categorySlug": "electrical-panels",
    "categoryName": "Electrical Panels & Distribution Equipment",
    "shortDescription": "High tension vacuum circuit breaker panels and industrial high-current busduct trunking systems rated up to 6300A.",
    "fullDescription": "Engineered HT Vacuum Circuit Breaker (VCB) panels and sandwich/air-insulated busduct trunking systems up to 6300A rating for primary substation interconnection, high-rise risers, and heavy industrial plant mains.",
    "isFastMoving": false,
    "leadTime": "Engineered-to-order per layout drawings",
    "packagingUnit": "Assembly / Meter Run",
    "image": "/images/electrical_panels.jpg",
    "specifications": {
      "Voltage Rating": "11kV / 22kV / 33kV (VCB) / 415V (Busduct)",
      "Busduct Current Rating": "Up to 6300A",
      "Insulation": "Epoxy coated / Class F / Class H insulation",
      "Testing": "Type-tested design compliance"
    },
    "verifiedFeatures": [
      "Compact footprint with high short-circuit withstand rating",
      "Low impedance sandwich busduct geometry for minimal voltage drops",
      "Comprehensive interlocks for operator and equipment safety"
    ]
  },
  {
    "id": "prod-201",
    "slug": "lv-xlpe-pvc-power-cables",
    "name": "L.V. XLPE & PVC Armoured Power Cables",
    "categorySlug": "wires-and-cables",
    "categoryName": "Wires and Cables",
    "shortDescription": "Low-voltage armoured and unarmoured power cables with copper or aluminium conductors.",
    "fullDescription": "Heavy-duty 1.1 kV grade power transmission cables manufactured with cross-linked polyethylene (XLPE) or PVC insulation and galvanized steel strip/wire armouring for underground and duct installations.",
    "isFastMoving": true,
    "leadTime": "Standard sizes available from stock; project cuts upon order confirmation",
    "packagingUnit": "Meters / Drum",
    "image": "/images/wires_and_cables.jpg",
    "specifications": {
      "Voltage Grade": "1100 Volts (1.1 kV)",
      "Conductor": "High conductivity electrolytic grade Aluminium or Copper (Stranded)",
      "Insulation": "XLPE / PVC Compound",
      "Armouring": "Galvanized round wire / flat strip armour",
      "Standard": "Manufactured to relevant IS/IEC standards"
    },
    "verifiedFeatures": [
      "Excellent resistance to moisture, oils, and chemical soils",
      "High thermal overload handling capacity",
      "Supplied in standard 500m / 1000m drums or project-specified cut lengths"
    ]
  },
  {
    "id": "prod-202",
    "slug": "mv-power-cables-upto-33kv",
    "name": "M.V. Power Cables (Up to 33 kV)",
    "categorySlug": "wires-and-cables",
    "categoryName": "Wires and Cables",
    "shortDescription": "Medium-voltage XLPE insulated, screened and armoured cables rated from 3.3 kV up to 33 kV.",
    "fullDescription": "Medium voltage underground distribution cables designed for high power transmission from sub-stations to heavy industrial transformers and distribution hubs.",
    "isFastMoving": false,
    "leadTime": "Procurement upon exact core and cross-section BOQ specification",
    "packagingUnit": "Meters / Drum",
    "image": "/images/wires_and_cables.jpg",
    "specifications": {
      "Voltage Range": "3.3 kV, 6.6 kV, 11 kV, 22 kV, 33 kV (E & UE)",
      "Screening": "Extruded semi-conducting screen with copper tape",
      "Outer Sheath": "Heavy duty PVC / HDPE / FRLS compound"
    },
    "verifiedFeatures": [
      "Triple extruded curing process for void-free insulation",
      "Withstands high electrical stresses and mechanical impacts",
      "Individual drum test certificates provided upon dispatch"
    ]
  },
  {
    "id": "prod-203",
    "slug": "fire-survival-fs-and-zero-halogen-cables",
    "name": "Fire Survival (FS) & Zero Halogen (LSZH) Cables",
    "categorySlug": "wires-and-cables",
    "categoryName": "Wires and Cables",
    "shortDescription": "Circuit integrity fire-resistant cables that continue to operate during active fires.",
    "fullDescription": "Specialized fire-survival cables engineered for emergency lighting, fire alarms, smoke extraction systems, and critical hospital/metro infrastructure. Emits non-corrosive, non-toxic zero-halogen gases when exposed to open flame.",
    "isFastMoving": false,
    "leadTime": "Supplier-backed procurement per requirement",
    "packagingUnit": "Meters / Coil",
    "image": "/images/wires_and_cables.jpg",
    "specifications": {
      "Fire Rating": "Withstands temperatures up to 950\u00b0C for rated duration",
      "Smoke Density": "Low smoke emission complying with IEC standards",
      "Toxicity Index": "Halogen-free acid gas generation < 0.5%"
    },
    "verifiedFeatures": [
      "Maintains circuit integrity for critical emergency equipment during fire",
      "Non-corrosive gases protect electronic equipment and life safety",
      "Silicon / mica tape fire barrier insulation"
    ]
  },
  {
    "id": "prod-204",
    "slug": "industrial-building-wires-frls",
    "name": "Industrial Building Wires (FR / FRLS / FRZH)",
    "categorySlug": "wires-and-cables",
    "categoryName": "Wires and Cables",
    "shortDescription": "Flame Retardant (FR) and Low Smoke (FRLS) flexible copper conduit wires.",
    "fullDescription": "Single-core flexible insulated copper building wires engineered for commercial complexes, switchboard internal wiring, and plant lighting circuits.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "90m / 180m Coil",
    "image": "/images/wires_and_cables.jpg",
    "specifications": {
      "Sizes": "0.5 sq mm to 50 sq mm (Single Core)",
      "Conductor": "100% Electrolytic Bright Annealed Copper",
      "Sheath Options": "FR, FRLS, HR-FR, FRZH options",
      "Voltage": "Up to 1100V"
    },
    "verifiedFeatures": [
      "High oxygen index preventing self-sustained flame propagation",
      "Smooth conduit pulling characteristics",
      "Standard color coding: Red, Yellow, Blue, Black, Green, Grey"
    ]
  },
  {
    "id": "prod-301",
    "slug": "molded-case-circuit-breakers-mccb",
    "name": "Molded Case Circuit Breakers (MCCB)",
    "categorySlug": "switchgear-and-protection",
    "categoryName": "Switchgear and Protection Devices",
    "shortDescription": "Adjustable thermal-magnetic and microprocessor-trip MCCBs from 16A to 1250A.",
    "fullDescription": "Industrial molded case circuit breakers for power feeder protection, switchboards, and distribution systems. Features high short-circuit breaking capacities (25kA, 36kA, 50kA, 70kA).",
    "isFastMoving": true,
    "leadTime": "Selected ratings in stock; specialized trip units supplier-backed",
    "packagingUnit": "Piece",
    "image": "/images/switchgear.jpg",
    "specifications": {
      "Current Ratings": "16A, 25A, 32A, 63A, 100A, 125A, 250A, 400A, 630A, 800A, 1250A",
      "Poles": "3 Pole (3P) / 4 Pole (4P)",
      "Breaking Capacity": "18kA, 25kA, 36kA, 50kA, 70kA",
      "Trip Mechanism": "Thermal-Magnetic (TMD) or Microprocessor Electronic (MicroLogic/ETU)"
    },
    "verifiedFeatures": [
      "Compact modular dimensions for space-efficient panel layouts",
      "Spreaders, rotary handles, and auxiliary contacts available",
      "Verified brands sourced through authorized industrial channels"
    ]
  },
  {
    "id": "prod-302",
    "slug": "miniature-circuit-breakers-mcb",
    "name": "Miniature Circuit Breakers (MCB) & Isolators",
    "categorySlug": "switchgear-and-protection",
    "categoryName": "Switchgear and Protection Devices",
    "shortDescription": "DIN-rail mounted MCBs (B, C, D curves) and main isolator switches.",
    "fullDescription": "Single-pole to four-pole miniature circuit breakers designed for sub-circuit protection against overload and short-circuit faults in lighting and industrial machinery boards.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Box / Piece",
    "image": "/images/switchgear.jpg",
    "specifications": {
      "Current Range": "0.5A to 63A / 80A to 125A",
      "Poles": "SP, SPN, DP, TP, TPN, 4P",
      "Breaking Capacity": "10kA / 6kA (IS/IEC 60898 & 60947-2)",
      "Trip Characteristic": "B Curve (Domestic/Resistive), C Curve (Standard Inductive), D Curve (High Inrush)"
    },
    "verifiedFeatures": [
      "Bi-connect terminal architecture for cable and busbar comb connections",
      "Positive contact indication window (Red/Green)",
      "DIN rail snap-on mounting"
    ]
  },
  {
    "id": "prod-303",
    "slug": "residual-current-devices-rccb-rcbo",
    "name": "Residual Current Devices: RCCB (ELCB) & RCBO",
    "categorySlug": "switchgear-and-protection",
    "categoryName": "Switchgear and Protection Devices",
    "shortDescription": "Sensitive earth-leakage circuit breakers and combined overcurrent protection units.",
    "fullDescription": "Essential personnel and plant protection devices detecting microscopic earth leakage currents to prevent electrical electrocution hazards and electrical fire ignition.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Piece",
    "image": "/images/switchgear.jpg",
    "specifications": {
      "Sensitivity": "30mA (Human Safety), 100mA, 300mA (Fire Prevention)",
      "Configurations": "2 Pole (DP) / 4 Pole (4P)",
      "Rated Current": "16A, 25A, 40A, 63A, 100A",
      "Standards": "Complies with IS 12640 / IEC 61008"
    },
    "verifiedFeatures": [
      "Integrated test button for periodic mechanical & electrical verification",
      "Immunity against nuisance tripping from switching surges",
      "High short-circuit conditional withstand"
    ]
  },
  {
    "id": "prod-304",
    "slug": "motor-protection-circuit-breakers-mpcb",
    "name": "Motor Protection Circuit Breakers (MPCB)",
    "categorySlug": "switchgear-and-protection",
    "categoryName": "Switchgear and Protection Devices",
    "shortDescription": "Combined motor starter switches integrating overload, short-circuit, and phase-loss protection.",
    "fullDescription": "Dedicated motor protection switches engineered specifically for direct motor starting and protection without requiring separate overload relays or fuses.",
    "isFastMoving": true,
    "leadTime": "Available from stock / supplier backed",
    "packagingUnit": "Piece",
    "image": "/images/switchgear.jpg",
    "specifications": {
      "Current Settings": "0.1A up to 100A (Adjustable thermal dials)",
      "Trip Class": "Class 10 standard motor trip",
      "Operation": "Rotary knob or push-button actuator"
    },
    "verifiedFeatures": [
      "Built-in phase failure sensitivity to protect three-phase motors",
      "High breaking capacity up to 100kA without backup fuses",
      "Add-on shunt trips and undervoltage releases supported"
    ]
  },
  {
    "id": "prod-305",
    "slug": "heavy-duty-contactors-and-relays",
    "name": "Heavy Duty Power Contactors & Control Relays",
    "categorySlug": "switchgear-and-protection",
    "categoryName": "Switchgear and Protection Devices",
    "shortDescription": "3-pole power contactors (9A to 800A), auxiliary contact blocks, and thermal overload relays.",
    "fullDescription": "Electromagnetic power contactors designed for frequent switching of electric motors, heating banks, and capacitor loads under demanding industrial AC-3 and AC-4 duty.",
    "isFastMoving": true,
    "leadTime": "Available from stock / supplier backed",
    "packagingUnit": "Piece",
    "image": "/images/switchgear.jpg",
    "specifications": {
      "Power Ratings": "9A, 12A, 18A, 25A, 32A, 40A, 65A, 95A, 115A, 150A, 225A, 300A, 500A, 800A",
      "Coil Voltages": "24V AC/DC, 110V AC, 220V/240V AC, 415V AC",
      "Auxiliary Contacts": "1NO+1NC / 2NO+2NC configurable top/side add-on"
    },
    "verifiedFeatures": [
      "Silver-nickel contacts for high electrical endurance and anti-welding",
      "Wide coil operating tolerance for unstable field voltages",
      "Direct plug-in compatibility with thermal overload relays"
    ]
  },
  {
    "id": "prod-401",
    "slug": "high-power-led-flood-lights",
    "name": "High-Power Industrial LED Flood Lights (50W to 1000W)",
    "categorySlug": "lighting-and-accessories",
    "categoryName": "Lighting and Electrical Accessories",
    "shortDescription": "Die-cast aluminium outdoor flood fixtures for high-mast yards, plant perimeters, and warehouses.",
    "fullDescription": "Heavy-duty outdoor luminaire featuring pressure die-cast aluminium housing, toughened glass lens, and IP66 waterproof sealing for harsh industrial atmospheres.",
    "isFastMoving": true,
    "leadTime": "Standard wattages (50W, 100W, 200W) in stock; 500W/1000W high-mast project supply",
    "packagingUnit": "Piece / Carton",
    "image": "/images/lighting.jpg",
    "specifications": {
      "Wattage Options": "50W, 100W, 150W, 200W, 250W, 400W, 500W, 1000W",
      "Ingress Protection": "IP66 / IP65 Waterproof & Dustproof",
      "Surge Protection": "Integrated 4kV / 6kV / 10kV surge protection device (SPD)",
      "Color Temperature": "Cool White (5700K - 6500K) / Warm White (3000K)"
    },
    "verifiedFeatures": [
      "High luminous efficacy (> 120 Lumens per Watt)",
      "Fin-type thermal heat sink for continuous high-temperature duty",
      "Heavy duty mounting bracket with adjustable aiming angle"
    ]
  },
  {
    "id": "prod-402",
    "slug": "flame-proof-well-glass-fittings",
    "name": "Flame Proof Well Glass Fittings & Tube Lights",
    "categorySlug": "lighting-and-accessories",
    "categoryName": "Lighting and Electrical Accessories",
    "shortDescription": "Certified explosion-proof lighting fixtures for chemical plants, paint shops, and refinery areas.",
    "fullDescription": "Robust cast aluminium flameproof well glass fixtures and explosion-protected tube light luminaires designed for Zone 1 and Zone 2 hazardous gas and dust environments.",
    "isFastMoving": false,
    "leadTime": "Supplier-backed procurement per project specs",
    "packagingUnit": "Piece",
    "image": "/images/lighting.jpg",
    "specifications": {
      "Enclosure": "Cast Light Aluminium Alloy LM-6",
      "Hazardous Classification": "Ex d IIA, IIB, IIC T6, Zone 1 & 2",
      "Protection": "IP65 weatherproof sealing with neoprene gasket",
      "Lamp Support": "LED retrofit / CFL / Metal Halide compatible"
    },
    "verifiedFeatures": [
      "Thermal shock-resistant borosilicate well glass dome",
      "Supplied with galvanized wire protective guard",
      "External earthing terminal and cable entry glands"
    ]
  },
  {
    "id": "prod-403",
    "slug": "led-street-lights-and-cleanroom-panels",
    "name": "LED Street Lights & Cleanroom 2x2 Panels",
    "categorySlug": "lighting-and-accessories",
    "categoryName": "Lighting and Electrical Accessories",
    "shortDescription": "Infrastructure roadway lighting fixtures and recessed 2x2 modular ceiling panels.",
    "fullDescription": "Commercial and plant roadway illumination luminaires designed for campus roads, internal factory pathways, and cleanroom office fixtures.",
    "isFastMoving": true,
    "leadTime": "Available from stock / project dispatches",
    "packagingUnit": "Piece / Carton",
    "image": "/images/lighting.jpg",
    "specifications": {
      "Street Light Wattages": "24W, 45W, 60W, 90W, 120W, 150W",
      "Cleanroom Panel": "36W / 45W 2x2 feet (595x595mm)",
      "Driver": "Isolated constant current driver with short circuit & overvoltage protection"
    },
    "verifiedFeatures": [
      "Secondary bat-wing optical lenses for broad roadway coverage",
      "Glares-free diffused PMMA light guide for office workstations",
      "Long operational life > 50,000 burning hours"
    ]
  },
  {
    "id": "prod-501",
    "slug": "brass-cable-glands-double-single-compression",
    "name": "Brass Cable Glands (Double & Single Compression)",
    "categorySlug": "cable-glands-lugs-terminals",
    "categoryName": "Cable Glands, Lugs and Terminal Blocks",
    "shortDescription": "Precision machined brass glands for armoured and unarmoured cable terminations.",
    "fullDescription": "Heavy-duty brass cable glands available in nickel-plated finish for weather-proof and flame-proof cable clamping. Single compression and double compression variants with neoprene rubber seals.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Box / 100 Pieces",
    "image": "/images/cable_glands_lugs.jpg",
    "specifications": {
      "Sizes": "1/2\" to 4\" / M16 to M100 metric threads",
      "Types": "Single Compression, Double Compression (Weatherproof & Flameproof)",
      "Material": "Brass IS-319 Grade 1 / Nickel plated",
      "Sealing Ring": "Neoprene rubber"
    },
    "verifiedFeatures": [
      "Mechanical cable retention and earth continuity bond",
      "Complete set supplied with lock nut, earth tag, and PVC shroud",
      "High pull-out resistance under heavy cable vibrations"
    ]
  },
  {
    "id": "prod-502",
    "slug": "copper-and-aluminium-terminal-lugs",
    "name": "Copper & Aluminium Terminal Lugs (Crimping Type)",
    "categorySlug": "cable-glands-lugs-terminals",
    "categoryName": "Cable Glands, Lugs and Terminal Blocks",
    "shortDescription": "Heavy-duty electro-tinned copper and aluminium cable lugs and inline ferrules.",
    "fullDescription": "Electrolytic grade terminal lugs for solid and stranded electrical cable connections to busbars, switchgear, and terminal blocks. Prevents hot spots and ensures maximum electrical conductivity.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Box / 100 Pieces",
    "image": "/images/cable_glands_lugs.jpg",
    "specifications": {
      "Conductor Size": "1.5 sq mm to 1000 sq mm",
      "Types": "Ring type, Pin type, Fork type, Tubular cable socket, In-line connector",
      "Plating": "Electro-tinned for corrosion prevention",
      "Stud Holes": "Standard bolt clearances (M5 to M20)"
    },
    "verifiedFeatures": [
      "Inspection hole to verify full cable core insertion before crimping",
      "Annealed material prevents cracking during hydraulic crimping",
      "Bimetallic lugs available for copper-to-aluminium transitions"
    ]
  },
  {
    "id": "prod-503",
    "slug": "din-rail-terminal-blocks-and-busbar-insulators",
    "name": "DIN Rail Terminal Blocks & Busbar Insulators",
    "categorySlug": "cable-glands-lugs-terminals",
    "categoryName": "Cable Glands, Lugs and Terminal Blocks",
    "shortDescription": "Screw-clamp modular feed-through terminal blocks and DMC busbar support insulators.",
    "fullDescription": "Modular electrical connectors for control and power distribution panels, DIN rail mounting channels, and high-strength dough molding compound (DMC) insulators for busbar mounting.",
    "isFastMoving": true,
    "leadTime": "Available from stock / supplier backed",
    "packagingUnit": "Box / 50 Pieces",
    "image": "/images/starters_terminals.jpg",
    "specifications": {
      "Terminal Range": "2.5 sq mm to 95 sq mm",
      "Mounting": "Standard 35mm DIN Rail (Channel Patti)",
      "Insulators": "Hexagonal DMC / SMC busbar supports with threaded brass inserts (M6 to M16)"
    },
    "verifiedFeatures": [
      "Flame-retardant polyamide 6.6 housing (UL 94 V-0)",
      "End plates, partition plates, and marking tags available",
      "High dielectric insulation resistance"
    ]
  },
  {
    "id": "prod-601",
    "slug": "chemical-earthing-electrodes-and-compound",
    "name": "Chemical Earthing Electrodes & BFC Compound",
    "categorySlug": "earthing-and-grounding",
    "categoryName": "Earthing and Grounding Products",
    "shortDescription": "Maintenance-free copper-bonded and GI chemical earthing pipes with backfill compound.",
    "fullDescription": "Modern maintenance-free earthing electrodes engineered with low-carbon steel core, bonded copper jacket, and non-corrosive crystalline ground-enhancing compound for sub-station and building grounding.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Piece / Bag",
    "image": "/images/earthing_products.jpg",
    "specifications": {
      "Lengths": "2 Meter / 3 Meter",
      "Diameters": "40mm, 50mm, 65mm, 80mm",
      "Copper Coating": "100 to 250 microns electrolytic bonding",
      "Compound": "Carbon/Bentonite based backfill ground-conditioning compound (25kg bags)"
    },
    "verifiedFeatures": [
      "Eliminates regular salt and charcoal watering requirements",
      "Maintains constant low ground resistance across dry and rainy seasons",
      "High short-circuit fault current dissipation"
    ]
  },
  {
    "id": "prod-602",
    "slug": "gi-and-copper-earth-plates-and-strips",
    "name": "GI & Pure Copper Earth Plates and Strips",
    "categorySlug": "earthing-and-grounding",
    "categoryName": "Earthing and Grounding Products",
    "shortDescription": "Hot-dip galvanized GI plates, pure electrolytic copper plates, and grounding strips (GI Patti).",
    "fullDescription": "Conventional grounding plates and connecting flat strips for substation grounding grids, plant lightning down-conductors, and transformer neutral grounding.",
    "isFastMoving": true,
    "leadTime": "Standard sizes in stock; custom shearing per BOQ",
    "packagingUnit": "Kilogram / Piece",
    "image": "/images/earthing_products.jpg",
    "specifications": {
      "Plate Sizes": "600 x 600 x 3mm / 600 x 600 x 6mm / 1200 x 1200mm",
      "Strip Dimensions": "25x3mm, 25x6mm, 32x6mm, 40x6mm, 50x6mm, 75x10mm",
      "Galvanizing": "Hot-dip galvanized to IS 2629 (> 80 microns coating)"
    },
    "verifiedFeatures": [
      "High corrosion resistance against soil moisture and acidic minerals",
      "Uniform zinc adhesion without peeling or cracking",
      "Complete mounting hardware and earthing funnels available"
    ]
  },
  {
    "id": "prod-603",
    "slug": "electrical-safety-rubber-mats-and-11kv-gloves",
    "name": "Electrical Safety Rubber Mats & 11KV Hand Gloves",
    "categorySlug": "earthing-and-grounding",
    "categoryName": "Earthing and Grounding Products",
    "shortDescription": "High-voltage insulating safety floor mats (IS 15652) and 11KV/33KV dielectric gloves.",
    "fullDescription": "Mandatory safety insulation materials for electrical sub-stations, control room panel bases, and maintenance technicians handling energized live lines.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Roll / Pair",
    "image": "/images/earthing_products.jpg",
    "specifications": {
      "Rubber Mat Class": "Class A (3.3 kV), Class B (11 kV), Class C (33 kV)",
      "Standard": "Manufactured strictly complying with IS 15652:2006",
      "Roll Dimensions": "1m width x 10m length / 2mm, 2.5mm, 3mm thickness",
      "Gloves": "Seamless electrical grade latex tested to 11kV / 33kV"
    },
    "verifiedFeatures": [
      "Fire-retardant, anti-skid checkered surface for operator stability",
      "Resistance to transformer oil, acids, and alkalis",
      "Supplied with manufacturer test certificate for electrical inspectorate approval"
    ]
  },
  {
    "id": "prod-701",
    "slug": "perforated-and-ladder-type-cable-trays",
    "name": "Perforated & Ladder-Type Cable Trays",
    "categorySlug": "cable-trays-and-management",
    "categoryName": "Cable Trays and Cable Management",
    "shortDescription": "Heavy-gauge galvanized steel cable trays for industrial and infrastructure cable runs.",
    "fullDescription": "Structural cable containment systems manufactured in perforated sheet metal and welded ladder designs. Finishes include Pre-Galvanized (GI), Hot-Dip Galvanized (HDG), and Powder Coated.",
    "isFastMoving": false,
    "leadTime": "Fabricated to project widths and lengths; standard sizes stocked",
    "packagingUnit": "Length (2.5m / 3m)",
    "image": "/images/cable_trays.jpg",
    "specifications": {
      "Width Range": "50mm to 1000mm",
      "Side Flange Height": "25mm, 40mm, 50mm, 75mm, 100mm",
      "Sheet Thickness": "1.2mm, 1.6mm, 2.0mm, 2.5mm, 3.0mm",
      "Finishes": "Pre-Galvanized, Hot-Dip Galvanized (IS 2629/IS 4759), Epoxy Powder Coated"
    },
    "verifiedFeatures": [
      "Supplied with splice coupler plates, fasteners, and cover clamps",
      "Complete range of horizontal bends, vertical tees, and reducers",
      "High structural load-bearing capacity for heavy armaments"
    ]
  },
  {
    "id": "prod-702",
    "slug": "pvc-wiring-ducts-and-flexible-conduits",
    "name": "PVC Wiring Ducts & Flexible Conduits",
    "categorySlug": "cable-trays-and-management",
    "categoryName": "Cable Trays and Cable Management",
    "shortDescription": "Slotted cable raceways and GI/PVC flexible conduits for motor terminations.",
    "fullDescription": "Flame-retardant slotted wiring ducts for internal panel neatness and flexible metallic conduits for vibration-isolated motor connection routing.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Box / Meter Bundle",
    "image": "/images/cable_trays.jpg",
    "specifications": {
      "Duct Sizes": "25x25mm up to 100x100mm (Slotted / Unslotted)",
      "Flexible Conduit": "16mm to 50mm (GI strip wound with PVC coating option)",
      "Temperature Range": "-5\u00b0C to +60\u00b0C continuous"
    },
    "verifiedFeatures": [
      "Snap-on duct covers with non-slip locking channels",
      "Finger break-away design for easy cable branch exit",
      "Crush-proof conduit shielding against mechanical hazards"
    ]
  },
  {
    "id": "prod-801",
    "slug": "fire-extinguishers-and-hydrant-valves",
    "name": "Fire Extinguishers & Fire Hydrant Valves",
    "categorySlug": "industrial-safety-products",
    "categoryName": "Industrial Safety Products",
    "shortDescription": "Certified ABC dry powder, CO2 extinguishers, and gunmetal fire hydrant landing valves.",
    "fullDescription": "Industrial fire prevention and firefighting gear engineered for shop floors, switchgear rooms, and warehouses. Includes portable extinguishers, hose boxes, and delivery nozzles.",
    "isFastMoving": true,
    "leadTime": "Stocked / supplier-backed consignments",
    "packagingUnit": "Piece",
    "image": "/images/safety_products.jpg",
    "specifications": {
      "Extinguisher Types": "ABC Powder (1kg to 9kg), CO2 (2kg to 4.5kg), AFFF Foam (9L), Mechanical Trolley (50L)",
      "Hydrant Valves": "Single / Double headed gunmetal / stainless steel landing valves (63mm)",
      "Fire Hose": "Type A / Type B canvas and RRL fire hoses with instantaneous couplings"
    },
    "verifiedFeatures": [
      "Pressure gauge indicator for instant readiness status check",
      "Full compliance with National Building Code (NBC) safety mandates",
      "Complete with mounting wall brackets and discharge horns"
    ]
  },
  {
    "id": "prod-802",
    "slug": "industrial-safety-helmets-jackets-shoes",
    "name": "Safety Helmets, Reflective Jackets & Safety Shoes",
    "categorySlug": "industrial-safety-products",
    "categoryName": "Industrial Safety Products",
    "shortDescription": "Personal protective equipment (PPE) including ISI helmets, high-vis jackets, and steel-toe shoes.",
    "fullDescription": "Complete workforce safety consignments designed for construction projects, factory personnel, and field engineering contractors.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Piece / Pair / Bulk Carton",
    "image": "/images/safety_products.jpg",
    "specifications": {
      "Helmets": "High-density polymer (HDPE) with 6-point suspension & ratchet adjuster (ISI marked)",
      "Jackets": "High-visibility fluorescent fabric with 2-inch retro-reflective tape",
      "Safety Shoes": "Genuine leather upper with 200J steel toe cap and oil-resistant PU sole"
    },
    "verifiedFeatures": [
      "Ergonomic fit designed for prolonged all-day wearing comfort",
      "High impact resistance shielding against falling debris",
      "Available in standardized enterprise bulk order quantities"
    ]
  },
  {
    "id": "prod-901",
    "slug": "digital-multimeters-and-clamp-meters",
    "name": "Digital Multimeters & True-RMS Clamp Meters",
    "categorySlug": "tools-and-testing-instruments",
    "categoryName": "Tools and Testing Instruments",
    "shortDescription": "Industrial electrical testing meters for AC/DC current, voltage, frequency, and capacitance.",
    "fullDescription": "Rugged handheld testing instruments engineered for plant maintenance technicians, panel builders, and field engineers. Features True-RMS accuracy for non-linear loads.",
    "isFastMoving": true,
    "leadTime": "Available from stock / supplier backed",
    "packagingUnit": "Piece",
    "image": "/images/testing_instruments.jpg",
    "specifications": {
      "Clamp Current": "Up to 600A / 1000A AC/DC",
      "Safety Category": "CAT III 1000V / CAT IV 600V rated",
      "Display": "Backlit LCD display with data hold and max/min recording"
    },
    "verifiedFeatures": [
      "True-RMS measurement capability ensuring precision on variable frequency drives",
      "Rugged overmolded casing withstands field drops",
      "Supplied with heavy-duty test leads, thermocouple probe, and carry case"
    ]
  },
  {
    "id": "prod-902",
    "slug": "digital-insulation-testers-megger-and-earth-testers",
    "name": "Digital Insulation Resistance (Megger) & Earth Testers",
    "categorySlug": "tools-and-testing-instruments",
    "categoryName": "Tools and Testing Instruments",
    "shortDescription": "High voltage insulation resistance testers (up to 5kV) and 4-wire digital earth ground testers.",
    "fullDescription": "Commissioning instruments for testing transformer winding health, motor insulation, power cable dielectrics, and sub-station earth pit resistance values.",
    "isFastMoving": false,
    "leadTime": "Supplier-backed procurement per brand preference",
    "packagingUnit": "Piece / Unit",
    "image": "/images/testing_instruments.jpg",
    "specifications": {
      "Insulation Test Voltages": "250V, 500V, 1000V, 2500V, 5000V",
      "Resistance Range": "Up to 1000 Giga-ohms (G\u03a9)",
      "Earth Resistance Range": "0.01\u03a9 to 2000\u03a9 (3-wire / 4-wire method)"
    },
    "verifiedFeatures": [
      "Automated Polarisation Index (PI) and Dielectric Absorption Ratio (DAR) calculation",
      "Complete kit includes grounding spikes, long test cable reels, and power pack",
      "Built-in live voltage detection warning for operator safety"
    ]
  },
  {
    "id": "prod-903",
    "slug": "hydraulic-and-ratchet-cable-crimping-tools",
    "name": "Hydraulic & Ratchet Cable Lug Crimping Tools",
    "categorySlug": "tools-and-testing-instruments",
    "categoryName": "Tools and Testing Instruments",
    "shortDescription": "Heavy-duty hand hydraulic crimpers and ratchet pliers for copper and aluminium lugs.",
    "fullDescription": "Heavy capacity hydraulic crimping tools with interchangeable hexagonal dies capable of creating permanent low-resistance electrical terminations on cables up to 1000 sq mm.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Set / Tool Kit",
    "image": "/images/testing_instruments.jpg",
    "specifications": {
      "Crimping Capacity": "10 sq mm to 400 sq mm / 1000 sq mm hydraulic",
      "Crimping Force": "12 Ton to 16 Ton hydraulic pressure",
      "Dies Included": "Complete set of hardened alloy steel hex dies"
    },
    "verifiedFeatures": [
      "Two-stage hydraulic action with automatic pressure relief valve",
      "180-degree rotating crimping head for confined panel spaces",
      "Heavy duty blow-molded carrying case"
    ]
  },
  {
    "id": "prod-1001",
    "slug": "stainless-steel-pipes-and-braided-hoses",
    "name": "Stainless Steel (SS) Pipes & SS Braided Hoses",
    "categorySlug": "pipes-fittings-and-fasteners",
    "categoryName": "Pipes, Fittings and Fasteners",
    "shortDescription": "SS 304 / SS 316 industrial pipes, seamless tubing, and flexible corrugated metal braided hoses.",
    "fullDescription": "Corrosion-resistant stainless steel piping and flexible braided metal hoses for high-pressure fluid transfer, chemical handling, steam lines, and structural fabrication.",
    "isFastMoving": false,
    "leadTime": "Standard diameters in stock; mill runs and custom cut lengths supplier-backed",
    "packagingUnit": "Meters / Length",
    "image": "/images/pipes_fasteners.jpg",
    "specifications": {
      "Grades": "SS 304, SS 304L, SS 316, SS 316L, Mild Steel (MS)",
      "Sizes": "1/4\" NB to 12\" NB in Schedule 10, 40, 80",
      "Hose Construction": "Annular corrugated stainless steel inner core with single/double SS 304 wire braid"
    },
    "verifiedFeatures": [
      "Accommodates thermal expansion and mechanical equipment vibration",
      "High temperature and corrosion resistance in aggressive environments",
      "Supplied with threaded unions, hex nipples, or flanged end fittings"
    ]
  },
  {
    "id": "prod-1002",
    "slug": "industrial-fasteners-ss-bolts-nuts-washers-studs",
    "name": "Industrial Fasteners: SS Bolts, Nuts, Washers & Studs",
    "categorySlug": "pipes-fittings-and-fasteners",
    "categoryName": "Pipes, Fittings and Fasteners",
    "shortDescription": "High-tensile stainless steel (SS 304 / 316) hex bolts, full-threaded studs, U-bolts, and nylock nuts.",
    "fullDescription": "Precision manufactured fasteners engineered for structural assemblies, cable tray suspensions, electrical panel frames, and heavy pipe clamp connections.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Box / 100 Pieces / Kilogram",
    "image": "/images/pipes_fasteners.jpg",
    "specifications": {
      "Fastener Types": "Hex Head Bolts, Full Thread Studs, Nylock Nuts, Dome Nuts, Plain & Spring Washers, CSK Screws",
      "Diameters": "M4 to M36 / Imperial 1/4\" to 1.5\"",
      "Material Grades": "SS 304, SS 316, High Tensile Grade 8.8 / 10.9"
    },
    "verifiedFeatures": [
      "Precision thread pitch preventing galling and stripping under high torque",
      "Superior resistance to outdoor weathering and chemical wash-downs",
      "Available in bulk project cartons for construction site deliveries"
    ]
  },
  {
    "id": "prod-1101",
    "slug": "inductive-proximity-and-photoelectric-sensors",
    "name": "Inductive Proximity & Photoelectric Sensors",
    "categorySlug": "sensors-transformers-components",
    "categoryName": "Sensors, Transformers and Industrial Components",
    "shortDescription": "Non-contact position detection sensors, photocells, and temperature transmitters.",
    "fullDescription": "Industrial sensors engineered for automated production lines, packaging machinery, conveyor positioning, and burner safety controllers.",
    "isFastMoving": true,
    "leadTime": "Available from stock / supplier backed",
    "packagingUnit": "Piece",
    "image": "/images/sensors_transformers.jpg",
    "specifications": {
      "Sensing Diameters": "M8, M12, M18, M30 cylindrical barrels",
      "Sensing Range": "2mm to 15mm (Inductive) / Up to 2m (Diffuse Photoelectric)",
      "Output Types": "PNP / NPN with Normally Open (NO) or Normally Closed (NC) contacts",
      "Protection": "IP67 sealed nickel-plated brass body"
    },
    "verifiedFeatures": [
      "High switching frequency for rapid moving parts",
      "LED output indicator for instant diagnostics during operation",
      "Short-circuit and reverse-polarity protected circuitry"
    ]
  },
  {
    "id": "prod-1102",
    "slug": "industrial-current-transformers-and-stabilizers",
    "name": "Current Transformers (CT Coils) & Industrial Stabilizers",
    "categorySlug": "sensors-transformers-components",
    "categoryName": "Sensors, Transformers and Industrial Components",
    "shortDescription": "Measuring and protection CT coils, automatic voltage regulators (AVR), and control transformers.",
    "fullDescription": "Magnetic transformation equipment designed for power metering boards, protection relays, servo voltage stabilization, and panel control circuits.",
    "isFastMoving": true,
    "leadTime": "Fast-moving CT ratios in stock; servo stabilizers engineered to rating",
    "packagingUnit": "Piece",
    "image": "/images/sensors_transformers.jpg",
    "specifications": {
      "CT Ratios": "50/5A up to 4000/5A (1A secondary options available)",
      "Accuracy Class": "Class 0.2s, 0.5, 1.0 (Metering) / 5P10, 10P10 (Protection)",
      "Construction": "Resin cast / Tape wound / Busbar pass-through window"
    },
    "verifiedFeatures": [
      "High saturation knee-point voltage for dependable fault trip signalling",
      "Terminal shroud covers preventing accidental contact",
      "High dielectric isolation between primary and secondary circuits"
    ]
  },
  {
    "id": "prod-1201",
    "slug": "hydraulic-hand-pallet-trucks-and-heavy-jacks",
    "name": "Hydraulic Hand Pallet Trucks & 55-Ton Jacks",
    "categorySlug": "custom-sourcing-and-handling",
    "categoryName": "Other Industrial Products and Custom Sourcing",
    "shortDescription": "Heavy capacity hydraulic hand pallet trucks (2.5T to 5T) and 55-ton aluminum lifting jacks.",
    "fullDescription": "Industrial material handling equipment engineered for heavy equipment offloading, warehouse pallet moving, and machine alignment.",
    "isFastMoving": true,
    "leadTime": "Fast-moving models in stock; heavy-duty specialized units supplier-backed",
    "packagingUnit": "Unit",
    "image": "/images/material_handling.jpg",
    "specifications": {
      "Pallet Truck Capacity": "2500 kg (2.5 Ton), 3000 kg (3.0 Ton), 5000 kg (5.0 Ton)",
      "Fork Dimensions": "Standard 1150mm x 550mm / 1220mm x 685mm",
      "Wheels": "Heavy-duty tandem Polyurethane (PU) or Nylon rollers",
      "Hydraulic Jack": "55-Ton single cylinder aluminum hydraulic lifting jack"
    },
    "verifiedFeatures": [
      "Leak-proof integrated hydraulic pump with overload bypass safety",
      "Three-position ergonomic control handle (Raise, Neutral, Lower)",
      "Reinforced heavy-gauge steel chassis frame"
    ]
  },
  {
    "id": "prod-1202",
    "slug": "scaffolding-accessories-u-jacks-couplers-clamps",
    "name": "Scaffolding Accessories: U-Jacks, Couplers & Clamps",
    "categorySlug": "custom-sourcing-and-handling",
    "categoryName": "Other Industrial Products and Custom Sourcing",
    "shortDescription": "Drop-forged scaffolding couplers, adjustable U-jacks, base jacks, and tie-rod anchor nuts.",
    "fullDescription": "Structural staging and shuttering hardware for plant expansion civil works, scaffolding towers, and infrastructure concrete formwork.",
    "isFastMoving": true,
    "leadTime": "Fast-moving stock / dispatched within 24-48h",
    "packagingUnit": "Bags / Kilograms / Sets",
    "image": "/images/scaffolding_shuttering.jpg",
    "specifications": {
      "Coupler Types": "Right Angle Swivel Coupler, Fixed Forged Clamp, Sheet Pressed Coupler",
      "Jacks": "Adjustable Stirrup U-Head Jack & Base Jack (Solid / Hollow screw rod)",
      "Accessories": "Wing nuts, Anchor nuts, Tie rods, Shikanja shuttering clamps"
    },
    "verifiedFeatures": [
      "High tensile drop-forged carbon steel hardware",
      "Standard 48.3mm scaffold tube compatibility",
      "Galvanized or electro-plated finish for long outdoor reuse"
    ]
  }
];
