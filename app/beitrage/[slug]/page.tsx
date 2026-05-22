import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleDetailPage } from "@/components/article-detail-page";
import {
  getBeitrageArticle,
  getBeitrageArticleSlugs,
} from "@/lib/article-detail-content";

type BeitrageArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBeitrageArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BeitrageArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBeitrageArticle(slug);

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
}: BeitrageArticlePageProps) {
  const { slug } = await params;
  const article = getBeitrageArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleDetailPage
      author={article.author}
      date={article.date}
      excerpt={article.excerpt}
      heroImage={article.heroImage}
      heroImageAlt={article.heroImageAlt}
      relatedArticles={article.relatedArticles}
      title={article.title}
    >
      <p className="mb-8 border-l-4 border-primary-container pl-6 font-body text-[1.25rem] font-medium leading-relaxed text-on-surface">
        {article.paragraphs[0]}
      </p>
      <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant">
        {article.paragraphs[1]}
      </p>

      <div className="my-16 border-2 border-primary-container">
        <div className="bg-primary-container px-6 py-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
            {article.quoteLabel}
          </span>
        </div>
        <blockquote className="bg-surface-container-low p-8 md:p-12">
          <p className="mb-6 font-headline text-[clamp(1.5rem,2.6vw,2.5rem)] font-bold leading-tight italic text-primary-container">
            &quot;{article.quoteText}&quot;
          </p>
          <footer className="text-xs font-extrabold uppercase tracking-widest text-archival">
            {article.quoteFooter}
          </footer>
        </blockquote>
      </div>

      <h2 className="mb-8 mt-16 inline-block border-b-2 border-primary-container pb-1 font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold text-on-surface">
        {article.sectionHeading}
      </h2>

      <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant">
        {article.paragraphs[2]}
      </p>

      <div className="my-16 overflow-hidden border-2 border-primary-container">
        <div className="border-b-2 border-primary-container bg-surface-container-low px-4 py-2">
          <span className="text-xs font-bold uppercase tracking-wider text-archival">
            Technical Detail
          </span>
        </div>
        <Image
          alt={article.secondaryImageAlt}
          className="h-auto w-full grayscale"
          src={article.secondaryImage}
          width={1200}
          height={800}
        />
        <p className="border-t-2 border-primary-container bg-surface-bright p-4 text-xs font-bold italic text-on-surface-variant">
          {article.secondaryCaption}
        </p>
      </div>

      <p className="mb-8 font-body text-base leading-relaxed text-on-surface-variant">
        {article.paragraphs[3]}
      </p>
      <p className="mb-0 font-body text-base leading-relaxed text-on-surface-variant">
        {article.paragraphs[4]}
      </p>
    </ArticleDetailPage>
  );
}
