import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates";

export const metadata: Metadata = {
  title: "Contact | MetaFab Systems",
  description:
    "Get in touch with MetaFab Systems for a project quote — engineering, structural work, and custom fabrication.",
};

export default function ContactPage() {
  return <ContactTemplate />;
}
