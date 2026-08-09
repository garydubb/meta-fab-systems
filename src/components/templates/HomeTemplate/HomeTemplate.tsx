"use client";

import {
  Hero,
  ServicesSection,
  GallerySection,
  TrustBadgesSection,
  FaqSection,
  ContactCtaSection,
} from "@/components/organisms";

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <TrustBadgesSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}