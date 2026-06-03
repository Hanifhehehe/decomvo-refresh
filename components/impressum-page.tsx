export function ImpressumPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <header className="mb-12 border-b border-charcoal pb-8 text-center md:mb-16 md:pb-10">
        <h1 className="mb-8 font-headline text-[clamp(2.75rem,5vw,5rem)] font-black leading-tight text-on-surface">
          Impressum
        </h1>
        <p className="font-body text-[1.75rem] leading-relaxed text-on-surface">
          Angaben gemäß §5 TMG
        </p>
      </header>

      <main className="mx-auto max-w-6xl">
        <section className="border border-charcoal bg-white">
          <div className="border-b border-charcoal bg-surface-container-low px-6 py-5 md:px-10">
            <h2 className="font-headline text-xl font-black leading-snug text-on-surface md:text-2xl">
              Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:
            </h2>
          </div>
          <div className="space-y-8 p-6 font-body text-[1.35rem] leading-relaxed text-on-surface md:p-10">
            <p>Adina Kendelbacher</p>
            <p>Sarah Wuchner</p>
          </div>
        </section>

        <section className="mt-gutter grid grid-cols-1 gap-gutter md:grid-cols-2">
          <div className="border border-charcoal bg-white">
            <div className="border-b border-charcoal bg-surface-container-low px-6 py-5 md:px-10">
              <h2 className="font-headline text-xl font-black text-on-surface md:text-2xl">
                Adresse
              </h2>
            </div>
            <div className="space-y-8 p-6 font-body text-[1.35rem] leading-relaxed text-on-surface md:p-10">
              <p>Katzlerstr. 15</p>
              <p>10829 Berlin</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div className="border border-charcoal bg-primary-container text-on-primary-container">
            <div className="border-b border-charcoal/60 px-6 py-5 md:px-10">
              <h2 className="font-headline text-xl font-black md:text-2xl">
                Kontakt:
              </h2>
            </div>
            <div className="space-y-8 p-6 font-body text-[1.35rem] leading-relaxed md:p-10">
              <p>
                Email:{" "}
                <a className="underline" href="mailto:Info@decomvo.com">
                  Info@decomvo.com
                </a>
              </p>
              <p>
                Tel:{" "}
                <a className="underline" href="tel:+491796114898">
                  +49 1796114898
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-gutter border border-charcoal bg-white">
          <div className="border-b border-charcoal bg-surface-container-low px-6 py-5 md:px-10">
            <h2 className="font-headline text-xl font-black text-on-surface md:text-2xl">
              Registereintrag:
            </h2>
          </div>
          <div className="grid grid-cols-1 divide-y divide-charcoal font-body text-[1.35rem] leading-relaxed text-on-surface md:grid-cols-3 md:divide-x md:divide-y-0">
            <p className="p-6 md:p-10">Eintragung im Vereinsregister</p>
            <p className="p-6 md:p-10">
              Registergericht: Berlin Charlottenburg
            </p>
            <p className="p-6 md:p-10">Registernummer: VR40252B</p>
          </div>
        </section>

        <div className="mt-16 space-y-12 font-body text-[1.35rem] leading-relaxed text-on-surface">
          <LegalTextSection title="Haftung für Inhalte">
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </LegalTextSection>

          <LegalTextSection title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </LegalTextSection>

          <LegalTextSection title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </LegalTextSection>
        </div>
      </main>
    </div>
  );
}

function LegalTextSection({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section>
      <h2 className="mb-6 font-headline text-2xl font-black text-on-surface md:text-3xl">
        {title}
      </h2>
      <div className="text-justify">{children}</div>
    </section>
  );
}
