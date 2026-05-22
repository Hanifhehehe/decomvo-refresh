export function QuoteSection() {
  return (
    <section
      id="ueber-uns"
      className="reveal-section reveal-hidden relative overflow-hidden border-b border-charcoal bg-surface-container-low px-8 py-48 text-center md:px-24"
    >
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-archival to-primary opacity-70" />

      <div className="reveal-section reveal-hidden reveal-delay-1 relative z-10 mx-auto max-w-5xl">
        <span className="mb-16 block flex items-center justify-center gap-4 font-headline text-xs font-black uppercase tracking-[1em] text-primary">
          <span className="pulse-accent h-2 w-2 rounded-full bg-tertiary" />
          Core Methodology // CLASSIFIED
          <span className="pulse-accent h-2 w-2 rounded-full bg-tertiary" />
        </span>

        <p className="font-body text-4xl font-light italic leading-[1.1] tracking-tight text-on-surface md:text-7xl">
          &quot;Decolonization is not a metaphor. It is a commitment to
          disrupting the structures that silence marginalized histories and
          envisioning futures built on equity and community.&quot;
        </p>

        <div className="reveal-section reveal-hidden reveal-delay-2 mt-24 inline-flex items-center gap-8">
          <span className="h-[4px] w-32 bg-primary" />
          <span className="font-headline text-sm font-black uppercase tracking-[0.5em]">
            Program Philosophy
          </span>
          <span className="h-[4px] w-32 bg-primary" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-10 -left-10 select-none font-headline text-[20rem] font-black uppercase text-charcoal/5"
        data-parallax="true"
        data-parallax-speed="0.2"
      >
        DCV
      </div>
    </section>
  );
}
