import Image from "next/image";

const CONTACT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkHV4PAOoRxTitKMA54dymvnlZ3YRMg_YEdgkUqHD6uDfrtTeQzz0M16rgLVP4w9Ta0VSEpWWUvcZM2uoUf0jCys2DQ8QOINz8CB1VFb5xYwvmsY_Y6leRUn4mzCaj9slRaHrRZd9-ZMKjbM8Ns5Evi7BeF3POG0PmCkLhXybEybne1DlVhv-OLmxTzjGnqKpyVBU5ffQ7q7djZKxHIkz2fijacDYjMs2xXIo_z76gLmo4nVgyhZ94PmYgPxejng5W2KxOocR2cs";

export function ContactPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <header className="reveal-section reveal-hidden mb-12 border-b border-charcoal pb-8 md:mb-16 md:pb-10">
        <h1 className="mb-4 font-headline text-[clamp(2.75rem,5vw,5rem)] font-black leading-tight text-on-surface">
          Kontakt
        </h1>
        <p className="max-w-3xl font-body text-[1.25rem] leading-relaxed text-on-surface-variant">
          Haben Sie Fragen zu unserer redaktionellen Arbeit oder Interesse an
          einer Kooperation? Wir freuen uns über Ihre Nachricht.
        </p>
      </header>

      <div className="grid grid-cols-1 border border-charcoal lg:grid-cols-12">
        <section className="reveal-section reveal-hidden border-b border-charcoal bg-surface-container-lowest lg:col-span-7 lg:border-b-0 lg:border-r">
          <div className="border-b border-charcoal bg-surface-container-low px-8 py-6 md:px-12">
            <h2 className="font-headline text-[1.25rem] font-black uppercase tracking-[0.25em] text-on-surface">
              Kontaktformular
            </h2>
          </div>

          <form
            action="https://formsubmit.co/info@decomvo.com"
            className="space-y-6 p-8 md:p-12"
            id="contact-form"
            method="POST"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="font-headline text-xs font-black uppercase tracking-[0.25em] text-on-surface"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input-focus w-full border border-outline-variant bg-surface px-4 py-3 font-body text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary"
                  id="name"
                  name="name"
                  placeholder="Ihr Name"
                  required
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="font-headline text-xs font-black uppercase tracking-[0.25em] text-on-surface"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input-focus w-full border border-outline-variant bg-surface px-4 py-3 font-body text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary"
                  id="email"
                  name="email"
                  placeholder="ihre@email.de"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="font-headline text-xs font-black uppercase tracking-[0.25em] text-on-surface"
                htmlFor="subject"
              >
                Betreff
              </label>
              <select
                className="form-input-focus w-full border border-outline-variant bg-surface px-4 py-3 font-body text-on-surface outline-none transition-all focus:border-primary"
                id="subject"
                name="subject"
                required
                defaultValue="general"
              >
                <option value="general">Allgemeine Anfrage</option>
                <option value="cooperation">Kooperation &amp; Partnerschaft</option>
                <option value="editorial">Redaktionelles Feedback</option>
                <option value="press">Presseanfrage</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                className="font-headline text-xs font-black uppercase tracking-[0.25em] text-on-surface"
                htmlFor="message"
              >
                Nachricht
              </label>
              <textarea
                className="form-input-focus min-h-[200px] w-full resize-none border border-outline-variant bg-surface px-4 py-3 font-body text-on-surface outline-none transition-all placeholder:text-on-surface-variant/50 focus:border-primary"
                id="message"
                name="message"
                placeholder="Wie können wir Ihnen helfen?"
                required
                rows={6}
              />
            </div>

            <div className="flex items-start gap-3 border-t border-charcoal pt-4">
              <input
                className="mt-1 h-5 w-5 border-outline-variant text-primary focus:ring-primary"
                id="privacy"
                name="privacy"
                required
                type="checkbox"
                value="accepted"
              />
              <label
                className="font-body text-sm leading-relaxed text-on-surface-variant"
                htmlFor="privacy"
              >
                Ich akzeptiere die{" "}
                <a className="text-primary underline" href="#">
                  Datenschutzerklärung
                </a>
                .
              </label>
            </div>

            <button
              className="btn-hover-effect inline-flex w-full items-center justify-center border-4 border-charcoal px-8 py-3 font-headline text-sm font-black uppercase tracking-[0.2em] text-on-surface transition-all md:w-auto"
              type="submit"
            >
              Nachricht senden
            </button>
          </form>
        </section>

        <aside className="reveal-section reveal-hidden lg:col-span-5">
          <div className="border-b border-charcoal bg-primary-container px-8 py-6 text-on-primary-container md:px-12">
            <h2 className="font-headline text-[1.25rem] font-black uppercase tracking-[0.25em] text-on-primary-container">
              Kontaktübersicht
            </h2>
          </div>

          <div className="space-y-0">
            <div className="border-b border-charcoal bg-surface-container-low p-8 md:p-12">
              <div className="flex items-start gap-4">
                {/* <span className="material-symbols-outlined border border-charcoal bg-white p-3 text-[18px] text-primary">
                  schedule
                </span> */}
                <div>
                  <h3 className="mb-2 font-headline text-[1.5rem] font-black uppercase tracking-[0.15em] text-on-surface">
                    Reaktionszeit
                  </h3>
                  <p className="font-body text-[1.05rem] leading-relaxed text-on-surface-variant">
                    Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden an
                    Werktagen zu bearbeiten. Dringende Presseanfragen werden
                    priorisiert.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 border-b border-charcoal md:grid-cols-2 lg:grid-cols-1">
              <div className="border-b border-charcoal bg-surface-container-low p-8 transition-colors hover:bg-surface-container md:border-b-0 md:border-r lg:border-r-0">
                <div className="flex items-center gap-4">
                  {/* <span className="material-symbols-outlined border border-charcoal bg-white p-3 text-[18px] text-primary">
                    alternate_email
                  </span> */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-on-surface-variant">
                      E-Mail
                    </p>
                    <p className="font-body text-[1.05rem] font-semibold text-on-surface">
                      info@decomvo.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-8 transition-colors hover:bg-surface-container md:border-l lg:border-l-0 lg:border-t lg:border-charcoal">
                <div className="flex items-center gap-4">
                  {/* <span className="material-symbols-outlined border border-charcoal bg-white p-3 text-[18px] text-primary">
                    location_on
                  </span> */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-on-surface-variant">
                      Büro
                    </p>
                    <p className="font-body text-[1.05rem] font-semibold text-on-surface">
                      Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-charcoal bg-surface-container-lowest p-8 md:p-12">
              <h3 className="mb-6 font-headline text-sm font-black uppercase tracking-[0.35em] text-on-surface-variant">
                Social Media
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  className="flex h-12 items-center justify-center border border-charcoal bg-white text-on-surface transition-all duration-300 hover:bg-primary hover:text-on-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined" data-icon="public">
                    public
                  </span>
                </a>
                <a
                  className="flex h-12 items-center justify-center border border-charcoal bg-white text-on-surface transition-all duration-300 hover:bg-primary hover:text-on-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined" data-icon="share">
                    share
                  </span>
                </a>
                <a
                  className="flex h-12 items-center justify-center border border-charcoal bg-white text-on-surface transition-all duration-300 hover:bg-primary hover:text-on-primary"
                  href="#"
                >
                  <span className="material-symbols-outlined" data-icon="groups">
                    groups
                  </span>
                </a>
              </div>
            </div>

            <div className="group relative h-56 overflow-hidden">
              <Image
                alt="A sophisticated, modern workspace with clean lines and minimalist furniture."
                className="h-full w-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                src={CONTACT_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-6 border border-white/30 bg-black/35 px-4 py-3 text-on-primary backdrop-blur-sm">
                <p className="font-headline text-xs font-black uppercase tracking-[0.25em]">
                  Besuchen Sie uns
                </p>
                <p className="font-body text-lg">DeComVo Editorial Hub</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
