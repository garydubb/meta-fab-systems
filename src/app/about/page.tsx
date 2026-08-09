import type { Metadata } from "next";
import { AboutTemplate } from "@/components/templates";
import { siteUrl } from "@/lib/seo";

const title = "About MetaFab Systems | Steel Fabrication in Ludhiana";
const description =
  "MetaFab Systems is a steel fabrication and engineering company in Ludhiana, Punjab, with 10+ years delivering CAD design and custom fabrication.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/about`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AboutPage() {
  return <AboutTemplate />;
}
