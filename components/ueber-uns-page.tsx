import Image from "next/image";
import Link from "next/link";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCY6VxBJjDLuH__rgwqy6QmZRXtdDlVSrKXVhC_J6ccPuKNxEJdVY8Z84FuLUf6sisq0rMigDa3QGts9BYWEH2E1wsUn-CnXWdlpgIyD0f_haX5r1Wsh3lv933kCg8FDnk2omHkasazMv2dKv9gbdSKBOoSfRB9Wf2nTJ9Kda2cpEOl5KmdpxgROB9IyivjpN4Ul3CHp8zG1VC10N1noGdO6pxoCrFuTjlSpIECsAbRwIIz4tVxwyPR3whjeXd4eXCsY-WpKp8jPnA";

export function UeberUnsPage() {
  return (
    <div className="mx-auto max-w-container-max px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      <section className="reveal-section reveal-hidden relative mb-12 overflow-hidden border-4 border-primary bg-white p-8 md:p-12">
        <div className="absolute right-0 top-0 border-l-2 border-b-2 border-outline-variant bg-surface-container-low p-4 font-headline text-xs font-black uppercase tracking-[0.25em] text-outline">
          REF: DCV-2024-ABOUT
        </div>
        <h1 className="mb-6 font-headline text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight text-primary">
          Über Uns
        </h1>
        <div className="mb-8 h-2 w-24 bg-primary" />
        <p className="max-w-3xl font-body text-[1.25rem] leading-relaxed text-on-surface-variant">
          DeComVo Editorial ist ein professionelles Archivsystem und eine
          Plattform für den gesellschaftlichen Diskurs. Wir strukturieren
          Komplexität, um marginalisierte Perspektiven in das Zentrum
          institutioneller Aufmerksamkeit zu rücken.
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
                Unsere Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              <div className="space-y-6">
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  DeComVo hat es sich zur Aufgabe gemacht, dekolonisierte
                  Stimmen zu verstärken und bestehende marginalisierende
                  Strukturen durch gezielte Archivierung und
                  Gemeinschaftsprojekte aufzubrechen. In einer Welt, in der
                  Information oft einseitig kuratiert wird, schaffen wir einen
                  Raum für die Pluralität der Erzählungen.
                </p>
                <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                  Wir verstehen das Archiv nicht als statischen Ort der
                  Vergangenheit, sondern als dynamisches Werkzeug für die
                  Gestaltung einer gerechteren Zukunft. Durch die Verbindung
                  von digitaler Innovation und ethischer Verantwortung setzen
                  wir neue Maßstäbe für die Sichtbarkeit unterrepräsentierter
                  Gruppen.
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
                  Der Ansatz
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                    Unsere Methodik basiert auf drei Grundpfeilern:
                    Institutionelle Integrität, radikale Transparenz und ein
                    präzises Editorial Design. Wir glauben, dass die Form den
                    Inhalt nicht nur unterstützt, sondern ihn erst zugänglich
                    und legitimiert macht.
                  </p>

                  <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                    <div className="border-2 border-outline-variant p-4">
                      <h3 className="mb-2 font-headline text-sm font-black uppercase text-primary">
                        Integrität
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        Ethische Standards in jeder Phase der Datenerhebung und
                        Dokumentation.
                      </p>
                    </div>
                    <div className="border-2 border-outline-variant p-4">
                      <h3 className="mb-2 font-headline text-sm font-black uppercase text-primary">
                        Transparenz
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        Offene Prozesse und klare Quellennachweise für maximale
                        Nachvollziehbarkeit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t-2 border-outline-variant pt-6 lg:border-t-0 lg:border-l-2 lg:pl-6">
                  <div className="flex aspect-square w-full items-center justify-center border-4 border-outline-variant bg-secondary-container p-8 text-center">
                    <p className="font-headline text-[1.75rem] font-black leading-tight text-primary">
                      Komplexität
                      <br />
                      erlebbar
                      <br />
                      machen
                    </p>
                  </div>
                  <p className="text-center text-xs font-medium italic uppercase tracking-[0.25em] text-outline">
                    Präzision im Design. Klarheit im Diskurs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="scroll-mt-24" id="kennzahlen">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="border-2 border-primary px-3 py-1 font-headline text-sm font-black text-primary">
                03
              </span>
              <h2 className="font-headline text-[clamp(1.75rem,3vw,2.75rem)] font-black text-on-surface">
                Kennzahlen
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["12", "Archiv-Ebenen"],
                ["08", "Formate"],
                ["DE/EN", "Sprachen"],
                ["2024", "Aktiv seit"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-4 border-charcoal bg-surface-container-lowest p-6"
                >
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-archival">
                    {label}
                  </p>
                  <p className="font-headline text-[clamp(2rem,4vw,3rem)] font-black text-on-surface">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-4 border-on-surface bg-on-surface p-8 text-surface md:p-12">
            <h2 className="mb-6 font-headline text-[clamp(2rem,4vw,4.5rem)] font-black">
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
              <Link
                className="border-2 border-surface px-8 py-4 text-xs font-black uppercase tracking-[0.35em] text-surface transition-colors hover:bg-surface hover:text-on-surface"
                href="/artikel"
              >
                Artikel
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
