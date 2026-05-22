import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { ArticleDetailPageProps } from "@/types/article-detail";

const imageBuilder = createImageUrlBuilder({
  projectId: "3hf8g5le",
  dataset: "production",
});

function formatArticleDate(publishedAt: string | null): string | null {
  if (!publishedAt) return null;

  const date = new Date(publishedAt);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function resolveSanityImage(source: unknown): string | null {
  if (!source) return null;

  try {
    return imageBuilder.image(source as never).auto("format").url();
  } catch {
    return null;
  }
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="reveal-section reveal-hidden mb-6 font-body text-[1.125rem] leading-relaxed text-on-surface-variant">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="reveal-section reveal-hidden mb-6 mt-12 font-headline text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-on-surface">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="reveal-section reveal-hidden mb-5 mt-10 font-headline text-[1.25rem] font-bold leading-tight text-on-surface">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="reveal-section reveal-hidden my-10 border-l-4 border-primary bg-surface-container-low p-6 md:p-8">
        <div className="font-headline text-[clamp(1.25rem,2.2vw,2rem)] font-semibold italic leading-snug text-primary-container">
          {children}
        </div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="reveal-section reveal-hidden mb-6 list-disc space-y-3 pl-6 font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="reveal-section reveal-hidden mb-6 list-decimal space-y-3 pl-6 font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : null;

      if (!href) return <>{children}</>;

      return (
        <a
          className="border-b border-primary-container text-primary-container transition-colors hover:border-primary hover:text-primary"
          href={href}
          rel="noreferrer"
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = resolveSanityImage(value);
      const alt = typeof value?.alt === "string" && value.alt.trim() ? value.alt : "Article image";
      const caption = typeof value?.caption === "string" ? value.caption : null;

      if (!src) return null;

      return (
        <figure className="reveal-section reveal-hidden my-12">
          <div className="group relative aspect-[1.75] overflow-hidden border border-outline-variant/30">
            <Image
              alt={alt}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              src={src}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 transition-all duration-300 group-hover:ring-black/0" />
          </div>
          {caption ? (
            <figcaption className="mt-2 text-center font-body text-xs uppercase tracking-[0.18em] text-secondary">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function ArticleDetailPage({
  title,
  excerpt,
  sectionLabel,
  publishedAt,
  heroImage,
  heroImageAlt,
  content,
}: ArticleDetailPageProps) {
  const formattedDate = formatArticleDate(publishedAt);
  const heroSrc = heroImage?.trim() ? heroImage : null;

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pb-24 pt-12 md:px-margin-desktop md:pt-24">
      <article className="reveal-section reveal-hidden relative mb-20 flex min-h-[600px] items-center justify-center overflow-hidden border border-outline-variant/30 md:mb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSrc ? (
            <Image
              alt={heroImageAlt}
              className="parallax-bg absolute top-[-10%] h-[120%] w-full object-cover"
              fill
              priority
              sizes="100vw"
              src={heroSrc}
            />
          ) : (
            <div className="h-full w-full bg-surface-container-low" />
          )}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-margin-mobile text-center md:px-margin-desktop">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-white/80">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.2em]">
              {sectionLabel}
            </span>
          </div>

          <h1 className="mb-6 font-headline text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight text-white">
            {title}
          </h1>

          {excerpt ? (
            <p className="mx-auto mb-10 max-w-3xl font-body text-[clamp(1.125rem,2.3vw,1.5rem)] leading-snug text-white/90">
              {excerpt}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-center gap-6 border-y border-white/20 py-4 text-white/80">
            {formattedDate ? (
              <div className="flex items-center gap-2">
                <span className="font-headline text-xs font-bold uppercase tracking-[0.2em]">
                  Published on {formattedDate}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </article>

      <section className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="md:col-start-2 md:col-span-10">
          <div className="mx-auto max-w-4xl">
            <PortableText value={content as never} components={portableTextComponents} />
          </div>
        </div>
      </section>
    </main>
  );
}
