import Image from "next/image";
import Link from "next/link";
import { articleHref } from "@/sanity/sanity-utils";
import type { Article } from "@/types/article";
import type { ArtikelPageProps } from "@/types/page";

function formatDate(dateValue: string | null): string {
  if (!dateValue) return "Undatiert";

  return new Date(dateValue).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function ArtikelPage({ projekte, beitrage }: ArtikelPageProps) {
  return (
    <div className="mx-auto min-h-screen max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
      <header className="reveal-section reveal-hidden mb-16 border-b-4 border-on-surface pb-6">
        <span className="font-headline text-xs font-black uppercase tracking-[0.35em] text-primary">
          Archiv &amp; Verzeichnis
        </span>
        <h1 className="mt-2 font-headline text-[clamp(2.5rem,5vw,5rem)] font-black text-on-surface">
          Editorial &amp; Kollektive Arbeit
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-2">
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-primary-container pb-2">
            <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black uppercase text-on-surface">
              Projekte
            </h2>
          </div>

          <div className="space-y-6">
            {projekte.map((item) => (
              <Link
                key={item._id}
                className="brutalist-border group block bg-surface-container-low p-6 transition-all hover:bg-primary-container/5"
                href={articleHref(item)}
              >
                {item.image ? (
                  <div className="mb-4 overflow-hidden brutalist-border-thin">
                    <Image
                      alt={item.title}
                      className="h-48 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      height={192}
                      src={item.image}
                      width={800}
                    />
                  </div>
                ) : null}

                <div className="mb-2 flex gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-archival">
                    {formatDate(item.publishedAt ?? item._createdAt)}
                  </span>
                </div>

                <h3 className="mb-3 font-headline text-[1.5rem] font-black text-on-surface transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  {item.excerpt ?? "Noch keine Beschreibung verfügbar."}
                </p>

              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-primary-container pb-2">
            <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black uppercase text-on-surface">
              Beiträge
            </h2>
          </div>

          <div className="space-y-6">
            {beitrage.map((item) => (
              <Link
                key={item._id}
                className="brutalist-border group block bg-surface-container-low p-6 transition-all hover:bg-primary-container/5"
                href={articleHref(item)}
              >
                {item.image ? (
                  <div className="mb-4 overflow-hidden brutalist-border-thin">
                    <Image
                      alt={item.title}
                      className="h-48 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      height={192}
                      src={item.image}
                      width={800}
                    />
                  </div>
                ) : null}

                <div className="mb-2 flex gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-archival">
                    {formatDate(item.publishedAt ?? item._createdAt)}
                  </span>
                </div>

                <h3 className="mb-3 font-headline text-[1.5rem] font-black text-on-surface transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  {item.excerpt ?? "Noch keine Beschreibung verfügbar."}
                </p>

              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="brutalist-border mt-24 overflow-hidden bg-on-surface p-12 text-surface">
        <div className="relative z-10">
          <h2 className="mb-6 font-headline text-[clamp(2rem,4vw,4.5rem)] font-black text-surface">
            Werde Teil der Bewegung.
          </h2>
          <p className="mb-8 max-w-2xl font-body text-[1.25rem] leading-relaxed opacity-80">
            Wir sind ständig auf der Suche nach neuen Stimmen, Beiträgen und
            Kooperationen. Lass uns gemeinsam dekoloniale Räume schaffen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="border border-primary bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.35em] text-white transition-colors hover:bg-primary-container"
              href="/kontakt"
            >
              Kontakt Aufnehmen
            </Link>
            <a
              className="border-2 border-surface px-8 py-4 text-xs font-black uppercase tracking-[0.35em] text-surface transition-colors hover:bg-surface hover:text-on-surface"
              href="mailto:hey@hanif.cool"
            >
              Newsletter
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-0 flex h-full w-1/3 items-center justify-center opacity-10">
          <span className="material-symbols-outlined !text-[200px]">public</span>
        </div>
      </section>
    </div>
  );
}
