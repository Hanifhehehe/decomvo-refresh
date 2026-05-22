import Image from "next/image";

const HERO_BG_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZELuM5XgTD4bk8v04HAxloVDX4fqWw51C7RN38VGbu52shBU6kSjCPac7QOP_EHNBRrz13LTakpQ5lLIkQ4r4U73PQuGlLYeXkyIlVdRfKkVxnGwIbCmIbD5HkgtmuUzlzBQg5EneYSfDiFXQwGpYxBnXuk3sNpd0ISUIxlkW_0wgfeupz3Zu-l5Na49fkGD34WFc1t4XSDCMOhPU5ZVjrRHB6JmozZQHND-16Yj_XWsW4AJV7kVuh6AQYKSawNW8-dqNXsTLP7Y";

export function HeroSection() {
  return (
    <section className="group relative flex min-h-[90vh] items-center justify-start overflow-hidden border-b border-charcoal">
      <div className="absolute inset-0 -z-10 opacity-20 bg-white">
        <Image
          alt="Hero Background"
          className="object-cover pointer-events-none select-none"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 80vw"
          src={HERO_BG_SRC}
        />
      </div>

      {/* Simplified decorative backdrop (removed skew and translates to minimize compositing overhead) */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-primary/5" />

      <div className="w-full p-8 md:p-24">
        {/* Removed mix-blend-multiply to improve text rendering speed */}
        <h1 className="font-headline condensed w-full text-[clamp(2.5rem,8.5vw,10rem)] font-black uppercase leading-[0.85] tracking-tighter text-charcoal">
          <span className="stagger-line">
            <span className="stagger-word" style={{ animationDelay: "0.1s" }}>
              Decolonized
            </span>
          </span>
          <span className="stagger-line">
            <span className="stagger-word" style={{ animationDelay: "0.25s" }}>
              Community
            </span>
          </span>
          <span className="stagger-line text-primary">
            <span className="stagger-word" style={{ animationDelay: "0.4s" }}>
              Voices
            </span>
          </span>
        </h1>

        <div className="reveal-section reveal-hidden reveal-delay-2 mt-24 max-w-md border-l-4 border-primary pl-8">
          <p className="font-body text-4xl italic leading-tight">
            Making decolonized voices heard!
          </p>
        </div>
      </div>

      <div
        className="reveal-section reveal-hidden reveal-delay-3 absolute bottom-12 right-12 h-32 w-32 rotate-12 border-2 border-dashed border-charcoal p-2"
        data-parallax="true"
        data-parallax-speed="-0.15"
      />
    </section>
  );
}
