import type { Metadata } from "next";
import { LocalBusinessJsonLd, FAQJsonLd } from "next-seo";
import { HomeTemplate } from "@/components/templates";
import { contact, faqs } from "@/lib/content";
import { siteUrl, siteName, homeTitle, defaultDescription, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: homeTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
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
      <FAQJsonLd
        questions={faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <HomeTemplate />
    </>
  );
}
