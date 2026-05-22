import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    kind: "VOL. 01",
    title: "Projekte",
    items: [
      {
        meta: "2024 / Aktiv",
        title: "Profit oder Planet!?",
        description:
          "Zwischen Wunsch und Widerspruch: Welche Zusammenhänge bestehen zwischen unserem kapitalistischen Wirtschaftssystem und ökologischen Krisen?",
      },
      {
        meta: "Monatlich",
        title: "Postkolonialer Lesekreis",
        description:
          "Gemeinsames Lesen und kritisches Hinterfragen postkolonialer Theoriebildung und Literatur im kollektiven Rahmen.",
      },
      {
        meta: "Jugend / Fokus",
        title: "Let’s Decolonize Young Voices",
        description:
          "Ein Projekt zur Stärkung marginalisierter Stimmen in der Jugendarbeit und gesellschaftlichen Teilhabe.",
      },
    ],
  },
  {
    kind: "JOURNAL",
    title: "Beiträge",
    items: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAKylkb61RtEfZti2StHtPM6FFptReFVfluiIXm4YEbrsjqHqArZ4enpmwa3cHr5LM7C_yMIAk6TyoH1gKba8UPIR9Et-Vrijq6MhxJvGC7H00Ldg4B18j7_Kma6SE06m_qQ_V1z-MXnfgfOJa_2ZkLDJkBIvZWEwNb8i0VCkdOYu_V6q6_NgUUVZbEQx7ZORR8KKaBaMXen9_GkteUYWbn3AtzZaJVyLv6Xe2lyWgVW_u3VeFmqsYFf8OkxqTb2zut42KQOSkhuxI",
        date: "12. Okt 2023",
        category: "Diaspora",
        title: "Echos der Diaspora",
        description:
          "Reflexionen über kulturelle Identität, Zugehörigkeit und den Erhalt von Traditionen in einem globalisierten Kontext.",
      },
      {
        date: "28. Sep 2023",
        category: "Technologie",
        title: "Algorithmic Bias",
        description:
          "Wie künstliche Intelligenz bestehende Machtstrukturen reproduziert und was wir dagegen tun können.",
      },
      {
        date: "05. Sep 2023",
        category: "Geschichte",
        title: "Systemische Löschung",
        description:
          "Analyse der musealen Praktiken und der Notwendigkeit einer umfassenden Restitution von Kulturgütern.",
      },
    ],
  },
] as const;

export function ArtikelPage() {
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
            <span className="border border-charcoal bg-on-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-container">
              VOL. 01
            </span>
          </div>

          <div className="space-y-6">
            {ARTICLES[0].items.map((item) => (
              <article
                key={item.title}
                className="brutalist-border block-accent group bg-surface-container-low p-6 transition-all hover:bg-surface-container-low"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-archival">
                    {item.meta}
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    north_east
                  </span>
                </div>
                <h3 className="mb-3 font-headline text-[1.5rem] font-black text-on-surface transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-primary-container pb-2">
            <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black uppercase text-on-surface">
              Beiträge
            </h2>
            <span className="border border-charcoal bg-on-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-container">
              Journal
            </span>
          </div>

          <div className="space-y-6">
            {ARTICLES[1].items.map((item) => (
              <article
                key={item.title}
                className="brutalist-border group bg-surface-container-low p-6 transition-all hover:bg-primary-container/5"
              >
                {"image" in item ? (
                  <div className="mb-4 overflow-hidden brutalist-border-thin">
                    <Image
                      alt="Diaspora"
                      className="h-48 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      height={192}
                      src={item.image}
                      width={800}
                    />
                  </div>
                ) : null}

                <div className="mb-2 flex gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-archival">
                    {item.date}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    • {item.category}
                  </span>
                </div>

                <h3 className="mb-2 font-headline text-[1.5rem] font-black text-on-surface">
                  {item.title}
                </h3>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-outline-variant/30 pt-4 text-right">
                  <span className="material-symbols-outlined text-on-surface">
                    arrow_forward
                  </span>
                </div>
              </article>
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
