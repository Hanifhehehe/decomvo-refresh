import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/article-detail-page";
import { articleSlug, getArticle, getArticles } from "@/sanity/sanity-utils";
import type { ArticleRoutePageProps } from "@/types/page";

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles
    .filter((article) => article.route === "projekte")
    .map((article) => ({ slug: articleSlug(article) }));
}

export async function generateMetadata({
  params,
}: ArticleRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle("projekte", slug);

  if (!article) {
    return {
      title: "Projekt | DeComVo",
    };
  }

  return {
    title: `${article.title} | DeComVo`,
    description: article.excerpt,
  };
}

export default async function ProjectArticlePage({
  params,
}: ArticleRoutePageProps) {
  const { slug } = await params;
  const article = await getArticle("projekte", slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleDetailPage
      content={article.content}
      excerpt={article.excerpt}
      heroImageAlt={article.title}
      heroImage={article.image}
      publishedAt={article.publishedAt}
      sectionLabel="Projekte"
      title={article.title}
    />
  );
}
