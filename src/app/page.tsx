import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "next-seo";
import { HomeTemplate } from "@/components/templates";
import { contact, siteInfo } from "@/lib/content";
import { siteUrl, siteName, defaultDescription, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.tagline.join(", ")}`,
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteInfo.name} | ${siteInfo.tagline.join(", ")}`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | ${siteInfo.tagline.join(", ")}`,
    description: defaultDescription,
  },
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd
        type="ProfessionalService"
        name={siteName}
        description={defaultDescription}
        url={siteUrl}
        telephone={contact.officePhone}
        address={{
          "@type": "PostalAddress",
          streetAddress: contact.address[0],
          addressLocality: "Ludhiana",
          addressRegion: "Punjab",
          postalCode: "141014",
          addressCountry: "IN",
        }}
      />
      <HomeTemplate />
    </>
  );
}
