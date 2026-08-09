import type { Metadata } from "next";
import { AboutTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "About | MetaFab Systems",
  description:
    "MetaFab Systems is an engineering and fabrication partner delivering CAD design, structural work, and custom fabrication under one roof.",
};

export default function AboutPage() {
  return <AboutTemplate />;
}
