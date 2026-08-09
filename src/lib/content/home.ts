export const services = [
  { title: "CAD Design & 3D Modelling", icon: "FileCog" },
  { title: "Elevation & Shed Structure", icon: "Building2" },
  { title: "Custom Gates and Railing", icon: "Fence" },
  { title: "Industrial Fabrication", icon: "Factory" },
  { title: "SPM Machines Design & Fabrication", icon: "Cpu" },
  { title: "Custom Designed Commercial & School Furniture", icon: "Armchair" },
  { title: "Installation & Erection", icon: "Wrench" },
  { title: "Maintenance Solutions", icon: "Settings" },
] as const;

// Free stock photos (Pexels), downloaded locally to public/images/gallery — swap for real project photography once available.
export const galleryItems = [
  { label: "Bridges & Structures", image: "/images/gallery/bridges-structures.jpg" },
  { label: "Elevation Gates & Grills", image: "/images/gallery/elevation-gates-grills.jpg" },
  { label: "Industrial Machines", image: "/images/gallery/industrial-machines.jpg" },
  { label: "Solidworks 3D Design", image: "/images/gallery/solidworks-3d-design.jpg" },
  { label: "Balcony & Terrace Railing", image: "/images/gallery/balcony-terrace-railing.jpg" },
  { label: "School Tables & Furniture", image: "/images/gallery/school-tables-furniture.jpg" },
  { label: "Custom Fabrication", image: "/images/gallery/custom-fabrication.jpg" },
] as const;

// Placeholder copy — expand with real, frequently-asked questions once provided.
export const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We fabricate for a range of industries, including construction, industrial manufacturing, education, and commercial fit-outs — from structural steelwork to custom furniture and machine parts.",
  },
  {
    question: "Do you handle both design and fabrication?",
    answer:
      "Yes. Our team covers the full process in-house, from CAD design and 3D modelling through to fabrication, installation, and erection on site.",
  },
  {
    question: "Can you work from our own drawings or specs?",
    answer:
      "Absolutely. Send us your drawings, specs, or reference photos and we'll quote against them directly, or help refine them before fabrication begins.",
  },
  {
    question: "What materials can you work with?",
    answer:
      "We regularly work with mild steel, stainless steel, aluminium, and other structural metals — let us know your project's requirements and we'll advise on the best fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary with scope and complexity. After reviewing your project details we'll give you a realistic delivery plan alongside your quote.",
  },
] as const;
