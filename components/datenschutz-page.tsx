import Link from "next/link";

const tableOfContents = [
  { id: "allgemein", label: "1. Allgemeines" },
  { id: "nutzung", label: "2. Nutzung der Website" },
  { id: "daten", label: "3. Personenbezogene Daten" },
  { id: "weitergabe", label: "4. Weitergabe an Dritte" },
  { id: "sicherheit", label: "5. Datenübertragung" },
  { id: "werbung", label: "6. Kontakt- und Werbedaten" },
] as const;

export function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <header className="reveal-section reveal-hidden mb-12 border-b border-charcoal pb-8 md:mb-16 md:pb-10">
        <p className="mb-4 font-headline text-xs font-black uppercase tracking-[0.35em] text-primary">
          Legal Appendix B
        </p>
        <h1 className="mb-4 font-headline text-[clamp(2.75rem,5vw,5rem)] font-black leading-tight text-on-surface">
          Datenschutzerklärung
        </h1>
        <p className="max-w-4xl font-body text-[1.25rem] leading-relaxed text-on-surface-variant">
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit personenbezogene Daten erhoben
          werden, erfolgt dies soweit möglich stets auf freiwilliger Basis.
        </p>
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
                {tableOfContents.map((item) => (
                  <a
                    className="px-6 py-4 font-headline text-xs font-black uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:bg-primary hover:text-white"
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border border-charcoal bg-primary-container p-6 text-on-primary-container">
              <p className="mb-2 font-headline text-[10px] font-black uppercase tracking-[0.3em]">
                Stand
              </p>
              <p className="font-body text-2xl font-semibold">2026</p>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <section className="border border-charcoal bg-white">
            <div className="border-b border-charcoal bg-surface-container-low px-6 py-5 md:px-10">
              <h2 className="font-headline text-sm font-black uppercase tracking-[0.3em] text-on-surface">
                Datenschutz auf einen Blick
              </h2>
            </div>
            <div className="grid grid-cols-1 divide-y divide-charcoal md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="p-6 md:p-8">
                <p className="mb-3 font-headline text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Grundsatz
                </p>
                <p className="font-body text-lg leading-relaxed text-on-surface">
                  Nutzung der Website grundsätzlich ohne Angabe
                  personenbezogener Daten.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-3 font-headline text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Zustimmung
                </p>
                <p className="font-body text-lg leading-relaxed text-on-surface">
                  Keine Weitergabe erhobener Daten ohne ausdrückliche
                  Zustimmung.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-3 font-headline text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                  Schutz
                </p>
                <p className="font-body text-lg leading-relaxed text-on-surface">
                  Datenübertragung im Internet kann Sicherheitslücken
                  aufweisen.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 space-y-12 font-body text-[1.125rem] leading-relaxed text-on-surface-variant">
            <LegalSection id="allgemein" title="1. Allgemeines">
              <p>
                Diese Datenschutzerklärung informiert darüber, wie auf dieser
                Website mit personenbezogenen Daten umgegangen wird.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich
                identifiziert werden können, beispielsweise Name, Anschrift oder
                E-Mail-Adressen.
              </p>
              <p>
                Der Schutz Ihrer Daten ist uns wichtig. Deshalb werden
                personenbezogene Daten nur in dem Umfang erhoben, in dem dies
                für die Nutzung unserer Seiten erforderlich ist oder von Ihnen
                freiwillig bereitgestellt wird.
              </p>
            </LegalSection>

            <LegalSection id="nutzung" title="2. Nutzung der Website">
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                personenbezogener Daten möglich.
              </p>
              <p>
                Sie können die Inhalte der Website daher grundsätzlich besuchen,
                ohne uns aktiv persönliche Angaben mitzuteilen.
              </p>
            </LegalSection>

            <LegalSection id="daten" title="3. Personenbezogene Daten">
              <p>
                Soweit auf unseren Seiten personenbezogene Daten
                (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben
                werden, erfolgt dies, soweit möglich, stets auf freiwilliger
                Basis.
              </p>
              <p>
                Freiwillig bereitgestellte Angaben behandeln wir vertraulich und
                ausschließlich im Rahmen der jeweils erkennbaren Kommunikation
                oder Anfrage.
              </p>
            </LegalSection>

            <LegalSection id="weitergabe" title="4. Weitergabe an Dritte">
              <p>
                Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
                Dritte weitergegeben.
              </p>
              <p>
                Eine Weitergabe erfolgt somit nicht ohne eine entsprechende
                Einwilligung oder einen hierfür bestehenden rechtlichen Grund.
              </p>
            </LegalSection>

            <LegalSection id="sicherheit" title="5. Datenübertragung">
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann.
              </p>
              <div className="my-8 border-l-4 border-primary bg-surface-container-low p-6">
                <p className="text-on-surface">
                  Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
                  ist nicht möglich.
                </p>
              </div>
            </LegalSection>

            <LegalSection id="werbung" title="6. Kontakt- und Werbedaten">
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht
                veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
                nicht ausdrücklich angeforderter Werbung und
                Informationsmaterialien wird hiermit ausdrücklich widersprochen.
              </p>
              <p>
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </LegalSection>
          </div>

          <div className="mt-16 border-t border-charcoal pt-8">
            <Link
              className="btn-hover-effect inline-flex border-4 border-charcoal px-8 py-3 font-headline text-sm font-black uppercase tracking-[0.2em] text-on-surface transition-all"
              href="/kontakt"
            >
              Datenschutzfrage stellen
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

function LegalSection({
  children,
  id,
  title,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  title: string;
}>) {
  return (
    <section className="scroll-mt-28" id={id}>
      <h2 className="mb-6 border-b border-charcoal pb-4 font-headline text-2xl font-black uppercase tracking-[0.08em] text-on-surface md:text-3xl">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
