import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type RelatedArticle = {
  category: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  ctaLabel: string;
};

export type ArticleDetailPageProps = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  heroImage: string;
  heroImageAlt: string;
  children: ReactNode;
  relatedArticles: RelatedArticle[];
};

export function ArticleDetailPage({
  title,
  excerpt,
  author,
  date,
  heroImage,
  heroImageAlt,
  children,
  relatedArticles,
}: ArticleDetailPageProps) {
  return (
    <div className="w-full">
      <header className="relative mb-20 flex min-h-[600px] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={heroImageAlt}
            className="h-full w-full object-cover"
            fill
            priority
            sizes="100vw"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-[4px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile py-16 md:px-margin-desktop">
          <div className="max-w-5xl">
            <h1 className="mb-8 font-headline text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-none tracking-tight text-on-surface">
              {title}
            </h1>
            <p className="mb-12 max-w-3xl font-headline text-[clamp(1.25rem,2.4vw,2rem)] leading-tight text-on-surface-variant opacity-95">
              {excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t-2 border-primary-container/40 pt-8">
              <div className="flex items-center gap-3 font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary-container">
                  person
                </span>
                <span className="text-xs font-black uppercase tracking-wider md:text-sm">
                  Authored by {author}
                </span>
              </div>
              <div className="flex items-center gap-3 font-bold text-archival">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_today
                </span>
                <span className="text-xs font-black uppercase tracking-wider">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="fade-in-up visible md:col-start-3 md:col-span-8">
            <div className="border-x-2 border-primary-container bg-white px-8 py-12 text-on-surface md:px-16">
              {children}
            </div>
          </div>
        </div>

        <section className="fade-in-up visible mt-32">
          <div className="mb-8 flex items-center gap-4">
            <h3 className="shrink-0 font-headline text-[clamp(1.5rem,3vw,2.5rem)] font-black uppercase tracking-tighter text-on-surface">
              Related Articles
            </h3>
            <div className="h-[2px] flex-grow bg-primary-container" />
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {relatedArticles.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col border-2 border-primary-container bg-white transition-colors hover:border-primary"
              >
                <div className="relative aspect-video overflow-hidden border-b-2 border-primary-container">
                  <Image
                    alt={article.imageAlt}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={article.image}
                  />
                  <div className="absolute right-0 top-0 bg-primary-container px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                    {article.category}
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h4 className="mb-3 font-headline text-[1.5rem] font-black leading-tight text-on-surface transition-colors group-hover:text-primary-container">
                    {article.title}
                  </h4>
                  <p className="mb-6 max-h-16 overflow-hidden font-body text-sm leading-relaxed text-on-surface-variant">
                    {article.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      className="inline-flex items-center gap-2 border-b-2 border-primary-container pb-1 text-xs font-black uppercase tracking-wider text-primary-container transition-all hover:gap-4"
                      href={article.href}
                    >
                      {article.ctaLabel}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
