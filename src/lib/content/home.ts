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
