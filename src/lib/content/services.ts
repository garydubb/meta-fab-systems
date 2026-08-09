// Placeholder copy — expand with real service descriptions once provided.
export const servicesIntro =
  "From first sketch to final weld, MetaFab Systems handles every stage of engineering and fabrication under one roof.";

export const softwareLogos = [
  { name: "AutoCAD", src: "/images/logos/autocad.svg" },
  { name: "SolidWorks", src: "/images/logos/solidworks.svg" },
  { name: "CATIA", src: "/images/logos/catia.svg" },
  { name: "Fusion 360", src: "/images/logos/fusion360.svg" },
  { name: "Inventor", src: "/images/logos/inventor.svg" },
] as const;

export const detailedServices = [
  {
    slug: "cad-design-3d-modelling",
    title: "CAD Design & 3D Modelling",
    icon: "FileCog",
    description:
      "Precision 3D modelling and drafting that turns your concept into a build-ready design before a single cut is made.",
    software: ["SolidWorks", "AutoCAD"],
    features: [
      {
        icon: "FileCog",
        title: "Parametric Modelling",
        description: "Fully editable 3D models built for fast design iteration.",
      },
      {
        icon: "Cpu",
        title: "Multi-Software Support",
        description: "Delivered in SolidWorks, AutoCAD, or your preferred format.",
      },
      {
        icon: "Target",
        title: "Manufacturing-Ready",
        description: "Drawings toleranced and detailed for direct shop-floor use.",
      },
    ],
    bestFor: [
      "New product and machine part design",
      "Converting hand sketches into build-ready drawings",
      "Structural and architectural elevation models",
      "Design validation before fabrication begins",
    ],
    whyItMatters:
      "Getting the design right on screen saves material, labour, and rework on the shop floor. Every fabrication job we take on starts with a model that's been checked for fit, tolerance, and manufacturability first.",
  },
  {
    slug: "elevation-shed-structure",
    title: "Elevation & Shed Structure",
    icon: "Building2",
    description:
      "Structural steel elevations and industrial shed frameworks engineered for load, longevity, and fast on-site assembly.",
    features: [
      {
        icon: "Building2",
        title: "Load-Rated Framing",
        description: "Structures engineered to relevant load and wind standards.",
      },
      {
        icon: "Wrench",
        title: "Bolted Assembly",
        description: "Designed for fast, precise on-site erection.",
      },
      {
        icon: "ShieldCheck",
        title: "Weather-Ready Finish",
        description: "Coatings and treatments suited to long outdoor service life.",
      },
    ],
    bestFor: [
      "Industrial and warehouse shed structures",
      "Factory extensions and mezzanine framing",
      "Architectural steel elevations",
      "Pre-engineered structural steel buildings",
    ],
    whyItMatters:
      "A structure is only as good as the steel and the calculations behind it. We engineer every frame for its actual load conditions, not just a standard template, so it holds up for decades of use.",
  },
  {
    slug: "custom-gates-and-railing",
    title: "Custom Gates and Railing",
    icon: "Fence",
    description:
      "Bespoke gates, grills, and balcony or terrace railing — cut, welded, and finished to match your property's design.",
    features: [
      {
        icon: "Fence",
        title: "Custom Patterns",
        description: "Cut and welded to match your architectural style.",
      },
      {
        icon: "ShieldCheck",
        title: "Security Rated",
        description: "Built for durability without compromising on design.",
      },
      {
        icon: "Settings",
        title: "Powder-Coated Finish",
        description: "Corrosion-resistant finish in your choice of colour.",
      },
    ],
    bestFor: [
      "Residential and commercial entrance gates",
      "Balcony and terrace railing",
      "Decorative window grills",
      "Boundary and compound fencing",
    ],
    whyItMatters:
      "Gates and railings are one of the first things people notice about a property. We treat them as both a security feature and a design statement, fabricated to fit your exact opening and finished to last.",
  },
  {
    slug: "industrial-fabrication",
    title: "Industrial Fabrication",
    icon: "Factory",
    description:
      "General industrial fabrication across mild steel, stainless steel, and aluminium for plant and factory requirements.",
    features: [
      {
        icon: "Factory",
        title: "Multi-Material",
        description: "Mild steel, stainless steel, aluminium, and sheet metal.",
      },
      {
        icon: "Target",
        title: "Precision Cutting",
        description: "Accurate cutting and forming for tight-tolerance parts.",
      },
      {
        icon: "Wrench",
        title: "Full Welding Service",
        description: "In-house welding across a full range of joint types.",
      },
    ],
    bestFor: [
      "Factory and plant equipment fabrication",
      "Structural brackets, frames, and supports",
      "Sheet metal enclosures and panels",
      "Custom one-off industrial components",
    ],
    whyItMatters:
      "Industrial projects rarely fit an off-the-shelf part. We fabricate to your exact specification, in the material your application actually needs, so equipment fits and performs the first time.",
  },
  {
    slug: "spm-machines-design-fabrication",
    title: "SPM Machines Design & Fabrication",
    icon: "Cpu",
    description:
      "Special-purpose machines designed and built around your specific process, from concept through commissioning.",
    features: [
      {
        icon: "Cpu",
        title: "Process-Specific Design",
        description: "Machines engineered around your exact production step.",
      },
      {
        icon: "FileCog",
        title: "In-House Design Team",
        description: "Concept, CAD, and control layout handled together.",
      },
      {
        icon: "Settings",
        title: "Commissioning Support",
        description: "Installed, tested, and handed over ready to run.",
      },
    ],
    bestFor: [
      "Automating a repetitive production step",
      "Custom jigs, fixtures, and test rigs",
      "Assembly line special-purpose machines",
      "Process upgrades where no standard machine fits",
    ],
    whyItMatters:
      "When a standard machine doesn't fit your process, building one that does is often the faster path to real productivity gains. We design and fabricate SPMs around your workflow, not the other way around.",
  },
  {
    slug: "commercial-school-furniture",
    title: "Custom Designed Commercial & School Furniture",
    icon: "Armchair",
    description:
      "Durable, custom-designed furniture for schools, offices, and commercial spaces built to withstand daily heavy use.",
    features: [
      {
        icon: "Armchair",
        title: "Heavy-Use Build",
        description: "Framed and welded for daily institutional wear.",
      },
      {
        icon: "FileCog",
        title: "Custom Sizing",
        description: "Made to fit your room layout and student or staff needs.",
      },
      {
        icon: "ShieldCheck",
        title: "Safety-Finished",
        description: "Rounded edges and durable, safe surface coatings.",
      },
    ],
    bestFor: [
      "School desks, benches, and storage furniture",
      "Office workstations and reception furniture",
      "Cafeteria and common-area seating",
      "Bulk furniture orders for new facilities",
    ],
    whyItMatters:
      "Institutional furniture takes a different kind of daily abuse than home furniture. We build ours on a steel frame first, so it holds up to years of classrooms and offices rather than months.",
  },
  {
    slug: "installation-erection",
    title: "Installation & Erection",
    icon: "Wrench",
    description:
      "On-site installation and erection handled by our own crews, so what's engineered in-house is fitted right the first time.",
    features: [
      {
        icon: "Wrench",
        title: "Own Crews",
        description: "No subcontracted handoff between design and install.",
      },
      {
        icon: "HardHat",
        title: "Safety-Focused",
        description: "Site work carried out to standard safety practice.",
      },
      {
        icon: "Clock",
        title: "On-Schedule Delivery",
        description: "Erection planned around your site's timeline.",
      },
    ],
    bestFor: [
      "Structural steel and shed erection",
      "Gate, railing, and fixture installation",
      "Industrial equipment placement",
      "Projects needing design-to-install continuity",
    ],
    whyItMatters:
      "The people who install your project are the same people who engineered and built it, so nothing gets lost between the drawing and the finished install.",
  },
  {
    slug: "maintenance-solutions",
    title: "Maintenance Solutions",
    icon: "Settings",
    description:
      "Ongoing maintenance and repair support to keep structures, gates, and machinery running long after handover.",
    features: [
      {
        icon: "Settings",
        title: "Scheduled Servicing",
        description: "Routine inspection and upkeep to catch issues early.",
      },
      {
        icon: "Wrench",
        title: "Repair & Retrofit",
        description: "Structural and mechanical repairs on existing work.",
      },
      {
        icon: "Clock",
        title: "Responsive Support",
        description: "Fast turnaround when something needs attention.",
      },
    ],
    bestFor: [
      "Periodic structural and gate maintenance",
      "Industrial machinery servicing",
      "Repair of existing fabricated work",
      "Long-term facility support contracts",
    ],
    whyItMatters:
      "Fabricated work is only durable if it's maintained. We stay involved after handover so structures, gates, and machines keep performing well past their first year.",
  },
] as const;
