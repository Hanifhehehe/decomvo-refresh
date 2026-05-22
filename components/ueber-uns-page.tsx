import Image from "next/image";
import Link from "next/link";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCY6VxBJjDLuH__rgwqy6QmZRXtdDlVSrKXVhC_J6ccPuKNxEJdVY8Z84FuLUf6sisq0rMigDa3QGts9BYWEH2E1wsUn-CnXWdlpgIyD0f_haX5r1Wsh3lv933kCg8FDnk2omHkasazMv2dKv9gbdSKBOoSfRB9Wf2nTJ9Kda2cpEOl5KmdpxgROB9IyivjpN4Ul3CHp8zG1VC10N1noGdO6pxoCrFuTjlSpIECsAbRwIIz4tVxwyPR3whjeXd4eXCsY-WpKp8jPnA";

export function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-container-max px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      <section className="reveal-section reveal-hidden relative mb-12 overflow-hidden border-4 border-primary bg-white p-8 md:p-12">
        <h1 className="mb-6 font-headline text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight text-primary">
          Über Uns
        </h1>
        <div className="mb-8 h-2 w-24 bg-primary" />
        <p className="max-w-3xl font-body text-[1.25rem] leading-relaxed text-on-surface-variant">
          DeComVo e.V. steht für Decolonized Community Voices. Wir schaffen
          Räume für junge und manchmal marginalisierte Stimmen, fördern ihre
          Vielfalt und geben ihnen Raum zur Weiterbildung. Dabei vernetzen wir
          Stimmen global und stärken eine Gemeinschaft, in der jede Stimme
          gehört wird.
        </p>
        <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-primary/5" />
      </section>

      <div className="mx-auto max-w-5xl">
        <div className="space-y-16">
          <section className="scroll-mt-24" id="mission">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="border-2 border-primary px-3 py-1 font-headline text-sm font-black text-primary">
                01
              </span>
              <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black text-on-surface">
                Wer wir sind
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <div className="space-y-6">
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  DeComVo e.V. wurde von Adina und Sarah gegründet. Beide haben
                  einen Bachelor in Asien- und Afrikawissenschaften an der
                  Humboldt-Universität zu Berlin absolviert. Im Studium wurde
                  deutlich, dass in sozialpolitischen Diskussionen oft nur
                  etablierte, wissenschaftliche Stimmen gehört werden.
                </p>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  Aus dieser Ungerechtigkeit heraus entstand die Idee, das
                  eigene Privileg zu nutzen: die Möglichkeit, an einer
                  Universität zu studieren und Netzwerke zu knüpfen. Daraus
                  wuchs DeComVo e.V. als Verein, in dem heute nicht nur wir,
                  sondern viele weitere Menschen aktiv sind. Unser Ziel ist es,
                  jungen und manchmal marginalisierten Stimmen eine Plattform
                  zu bieten, ihre Vielfalt zu fördern und ihnen Raum zur
                  Weiterbildung zu geben.
                </p>
              </div>

              <div className="border-4 border-outline p-2">
                <Image
                  alt="A professional, high-contrast black and white photograph of a modern archive space with clean geometric lines."
                  className="h-64 w-full object-cover grayscale contrast-125"
                  height={512}
                  src={ABOUT_IMAGE}
                  width={900}
                />
              </div>
            </div>
          </section>

          <section className="scroll-mt-24 bg-primary p-1 md:p-0" id="ansatz">
            <div className="border-4 border-primary bg-background p-8 md:p-12">
              <div className="mb-8 flex items-baseline gap-4">
                <span className="bg-primary px-3 py-1 font-headline text-sm font-black text-on-primary">
                  02
                </span>
                <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black text-on-surface">
                  Was wir machen
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                    Unsere Arbeit konzentriert sich darauf, auf die noch
                    bestehenden kolonialen Strukturen hinzuweisen und deren
                    Problematiken offenzulegen. Besonders engagieren wir uns im
                    Bereich der Bildungsarbeit: Wir planen und führen Workshops
                    durch, die Menschen sensibilisieren und aufklären.
                  </p>

                  <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                    <div className="border-2 border-outline-variant p-4">
                      <h3 className="mb-2 font-headline text-sm font-black uppercase text-primary">
                        Bildungsarbeit
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        Wir planen und führen Workshops durch, die Menschen
                        sensibilisieren und aufklären.
                      </p>
                    </div>
                    <div className="border-2 border-outline-variant p-4">
                      <h3 className="mb-2 font-headline text-sm font-black uppercase text-primary">
                        Lesekreis
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        Ein weiteres Projekt ist unser Postkolonialer Lesekreis,
                        in dem wir regelmäßig postkoloniale Literatur lesen und
                        diskutieren.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t-2 border-outline-variant pt-6 lg:border-t-0 lg:border-l-2 lg:pl-6">
                  <div className="flex aspect-square w-full items-center justify-center border-4 border-outline-variant bg-secondary-container p-8 text-center">
                    <p className="font-headline text-[1.75rem] font-black leading-tight text-primary">
                      Stimmen
                      <br />
                      vernetzen
                      <br />
                      und stärken
                    </p>
                  </div>
                  <p className="text-center text-xs font-medium italic uppercase tracking-[0.25em] text-outline">
                    Wir vernetzen Stimmen global und hinterfragen das
                    eurozentristische Narrativ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-4 border-on-surface bg-on-surface p-8 text-surface md:p-12">
            <h2 className="mb-6 font-headline text-[clamp(2rem,4vw,4.5rem)] font-black">
              Mehr entdecken.
            </h2>
            <p className="mb-8 max-w-2xl font-body text-[1.25rem] leading-relaxed opacity-80">
              Auf unserer Webseite findest du weitere Informationen zu unseren
              Projekten, Lösungsansätze und weiterführende Quellen. Wenn du
              mehr über unsere Arbeit erfahren möchtest, schau dir unsere
              Projekte an - dort kannst du dich auch über konkrete Initiativen
              wie unseren Lesekreis informieren.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="border border-primary bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.35em] text-white transition-colors hover:bg-primary-container"
                href="/kontakt"
              >
                Kontakt
              </Link>
              <Link
                className="border-2 border-surface px-8 py-4 text-xs font-black uppercase tracking-[0.35em] text-surface transition-colors hover:bg-surface hover:text-on-surface"
                href="/artikel"
              >
                Projekte
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
