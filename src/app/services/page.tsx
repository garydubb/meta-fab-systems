import type { Metadata } from "next";
import { ServicesTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "Services | MetaFab Systems",
  description:
    "CAD design, structural steel, custom gates and railing, industrial fabrication, SPM machines, commercial furniture, installation, and maintenance.",
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
