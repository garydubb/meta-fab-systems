import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/templates";
import { detailedServices } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return detailedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    return { title: { absolute: "Service | MetaFab Systems" } };
  }

  return {
    title: { absolute: `${service.title} | MetaFab Systems` },
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = detailedServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailTemplate service={service} />;
}
