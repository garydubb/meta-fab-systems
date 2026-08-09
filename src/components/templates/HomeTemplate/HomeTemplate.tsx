"use client";

import {
  Hero,
  ServicesSection,
  GallerySection,
  TrustBadgesSection,
  ContactSection,
} from "@/components/organisms";

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <TrustBadgesSection />
      <ContactSection />
    </>
  );
}