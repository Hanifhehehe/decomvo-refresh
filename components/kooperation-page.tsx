import Link from "next/link";

const cooperationItems = [
  {
    label: "Anlass",
    text: "Die Idee entstand im Zuge des Toolbox Wettbewerbs von Pen Paper Peace.",
  },
  {
    label: "Partner",
    text: "Pen Paper Peace ist ein in Berlin sitzender Verein mit politischer Bildungsarbeit.",
  },
  {
    label: "Ausblick",
    text: "Eine weiterführende Zusammenarbeit wird in Zukunft angestrebt.",
  },
] as const;

const focusAreas = ["Europa", "Honduras", "Haiti", "Namibia"] as const;

export function KooperationPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <header className="reveal-section reveal-hidden mb-12 border-b border-charcoal pb-8 md:mb-16 md:pb-10">
        <p className="mb-4 font-headline text-xs font-black uppercase tracking-[0.35em] text-primary">
          Legal Appendix A
        </p>
        <h1 className="max-w-6xl font-headline text-[clamp(2.5rem,5vw,5rem)] font-black leading-tight text-on-surface">
          Kooperation mit dem Verein Pen Paper Peace
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="sticky top-28 space-y-6">
            <div className="border border-charcoal bg-surface-container-low">
              <div className="border-b border-charcoal bg-white px-6 py-4">
                <h2 className="font-headline text-xs font-black uppercase tracking-[0.3em] text-on-surface">
                  Inhalt
                </h2>
              </div>
              <nav className="flex flex-col divide-y divide-outline-variant/70">
                <a
                  className="px-6 py-4 font-headline text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
                  href="#ursprung"
                >
                  1. Ursprung
                </a>
                <a
                  className="px-6 py-4 font-headline text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
                  href="#verein"
                >
                  2. Verein
                </a>
                <a
                  className="px-6 py-4 font-headline text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
                  href="#ausblick"
                >
                  3. Ausblick
                </a>
              </nav>
            </div>

            <div className="border border-charcoal bg-primary-container p-6 text-on-primary-container">
              <p className="mb-2 font-headline text-[10px] font-black uppercase tracking-[0.3em]">
                Partner
              </p>
              <p className="font-body text-2xl font-semibold">
                Pen Paper Peace
              </p>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <section className="border border-charcoal bg-white">
            <div className="border-b border-charcoal bg-surface-container-low px-6 py-5 md:px-10">
              <h2 className="font-headline text-sm font-black uppercase tracking-[0.3em] text-on-surface">
                Kooperation auf einen Blick
              </h2>
            </div>
            <div className="grid grid-cols-1 divide-y divide-charcoal md:grid-cols-3 md:divide-x md:divide-y-0">
              {cooperationItems.map((item) => (
                <div className="p-6 md:p-8" key={item.label}>
                  <p className="mb-3 font-headline text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                    {item.label}
                  </p>
                  <p className="font-body text-lg leading-relaxed text-on-surface">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 space-y-12 font-body text-[1.125rem] leading-relaxed text-on-surface-variant">
            <section className="scroll-mt-28" id="ursprung">
              <h2 className="mb-6 border-b border-charcoal pb-4 font-headline text-2xl font-black uppercase tracking-[0.08em] text-on-surface md:text-3xl">
                1. Ursprung der Idee
              </h2>
              <div className="space-y-6">
                <p>
                  Die Idee für Decolonizing Community Voices entstand im Zuge
                  des Toolbox Wettbewerbs von dem in Berlin sitzenden Verein Pen
                  Paper Peace.
                </p>
                <p>
                  Dieser Ursprung verbindet DeComVo mit einem Umfeld, das
                  politische Bildungsarbeit und nachhaltige Projekte
                  zusammendenkt.
                </p>
              </div>
            </section>

            <section className="scroll-mt-28" id="verein">
              <h2 className="mb-6 border-b border-charcoal pb-4 font-headline text-2xl font-black uppercase tracking-[0.08em] text-on-surface md:text-3xl">
                2. Arbeit von Pen Paper Peace
              </h2>
              <div className="space-y-6">
                <p>
                  Der Verein setzt sich für politische Arbeit mit Kindern und
                  Jugendlichen in Europa ein. Unterstützt aber auch verschiedene
                  nachhaltige Projekte in Honduras, Haiti und Namibia.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-4">
                  {focusAreas.map((area) => (
                    <div
                      className="border border-charcoal bg-surface-container-low px-4 py-5 text-center font-headline text-xs font-black uppercase tracking-[0.22em] text-on-surface"
                      key={area}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="scroll-mt-28" id="ausblick">
              <h2 className="mb-6 border-b border-charcoal pb-4 font-headline text-2xl font-black uppercase tracking-[0.08em] text-on-surface md:text-3xl">
                3. Ausblick
              </h2>
              <div className="border-l-4 border-primary bg-surface-container-low p-6 md:p-8">
                <p className="font-body text-[1.35rem] leading-relaxed text-on-surface">
                  Eine weiterführende Zusammenarbeit mit Pen Paper Peace e.V.
                  wird in Zukunft angestrebt.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16 border-t border-charcoal pt-8">
            <Link
              className="btn-hover-effect inline-flex border-4 border-charcoal px-8 py-3 font-headline text-sm font-black uppercase tracking-[0.2em] text-on-surface transition-all"
              href="/kontakt"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
