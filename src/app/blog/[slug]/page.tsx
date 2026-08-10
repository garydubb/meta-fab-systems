import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "next-seo";
import { BlogPostTemplate } from "@/components/templates";
import { blogPosts } from "@/lib/content";
import { siteUrl, siteName } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: { absolute: "Blog Post | MetaFab Systems" } };
  }

  const title = `${post.title} | MetaFab Systems`;

  return {
    title: { absolute: title },
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
        datePublished={`${post.publishedAt}T08:00:00+05:30`}
        author={siteName}
        image={`${siteUrl}${post.coverImage}`}
      />
      <BlogPostTemplate post={post} />
    </>
  );
}
