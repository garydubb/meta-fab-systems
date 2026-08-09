import type { Metadata } from "next";
import { ServicesTemplate } from "@/components/templates";
import { siteUrl } from "@/lib/seo";

const title = "Steel Fabrication Services in Ludhiana | MetaFab Systems";
const description =
  "CAD design, structural steel, custom gates & railing, industrial fabrication, SPM machines, and installation — steel fabrication services in Ludhiana, Punjab.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/services`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
