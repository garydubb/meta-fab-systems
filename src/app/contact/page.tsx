import type { Metadata } from "next";
import { ContactTemplate } from "@/components/templates";
import { siteUrl } from "@/lib/seo";

const title = "Contact MetaFab Systems | Steel Fabrication in Ludhiana";
const description =
  "Get a quote from MetaFab Systems, steel fabrication & engineering specialists in Ludhiana, Punjab. Call, message, or send your project details today.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/contact`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactPage() {
  return <ContactTemplate />;
}
