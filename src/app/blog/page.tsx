import type { Metadata } from "next";
import { BlogTemplate } from "@/components/templates";
import { siteUrl } from "@/lib/seo";

const title = "Blog | Steel Fabrication Insights | MetaFab Systems";
const description =
  "Practical guidance on materials, CAD design, and fabrication from MetaFab Systems — a steel fabrication and engineering company in Ludhiana, Punjab.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  return <BlogTemplate />;
}
