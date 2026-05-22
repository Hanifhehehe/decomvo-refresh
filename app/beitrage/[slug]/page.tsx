import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/article-detail-page";
import { articleSlug, getArticle, getArticles } from "@/sanity/sanity-utils";
import type { ArticleRoutePageProps } from "@/types/page";

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles
    .filter((article) => article.route === "beitrage")
    .map((article) => ({ slug: articleSlug(article) }));
}

export async function generateMetadata({
  params,
}: ArticleRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle("beitrage", slug);

  if (!article) {
    return {
      title: "Beitrag | DeComVo",
    };
  }

  return {
    title: `${article.title} | DeComVo`,
    description: article.excerpt,
  };
}

export default async function BeitrageArticlePage({
  params,
}: ArticleRoutePageProps) {
  const { slug } = await params;
  const article = await getArticle("beitrage", slug);

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
      sectionLabel="Beiträge"
      title={article.title}
    />
  );
}
