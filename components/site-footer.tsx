import Image from "next/image";
import Link from "next/link";
import { LEGAL_ITEMS, NAV_ITEMS } from "./site-data";

const FOOTER_LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCar04ONdV1zkl8ETp_y6Kru6JbvsIH0fo3qF1bp-v1ODiuMtJsbm4TZkLTaASg6WMU30892UP65Kp9vpnQYzNZbk3amn07jt0sBev21jGdbcKvqfELZP3OvoNOSDrqsTir6AHxb1tM5a3K4ycXlSjDbs-mrZrkw5wXeBfXWwcqFyLUSv-fhhfwb-8UYsyda2Q7Mvz35uglPHFvG5hJTUBSRiUS7DeHhxUHsM0c6ezLLdj0cjOLHMGiRkfqkkQnfzEkyalMfZB0P9o";

export function SiteFooter() {
  return (
    <footer className="reveal-section reveal-hidden border-t border-charcoal bg-white">
      <div className="grid grid-cols-1 border-b border-charcoal md:grid-cols-12">
        <div className="reveal-section reveal-hidden reveal-delay-1 space-y-8 border-charcoal p-12 md:col-span-4 md:border-r">
          <div className="flex items-center gap-6">
            <Image
              alt="DeComVo Logo"
              className="h-10 w-auto grayscale transition-all duration-500 hover:grayscale-0"
              height={40}
              src={FOOTER_LOGO_SRC}
              width={240}
            />
          </div>
          <p className="text-[11px] font-bold uppercase leading-loose tracking-[0.3em] text-archival">
            © 2026 DEKOLONISIERTE GEMEINSCHAFTSSTIMMEN.
            <br />
            ALLE RECHTE DEM VOLK VORBEHALTEN.
            <br />
            DEKOLONISIERTE PERSPEKTIVEN HÖRBAR MACHEN.
          </p>
        </div>

        <div className="reveal-section reveal-hidden reveal-delay-2 border-charcoal bg-archival/5 p-12 md:col-span-4 md:border-r">
          <h4 className="group relative mb-12 inline-block overflow-hidden border-b-4 border-primary pb-1 text-xs font-black uppercase tracking-[0.3em]">
            <span className="relative z-10">Navigation Index</span>
            <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full transform bg-primary/10 transition-transform duration-300 group-hover:translate-x-0" />
          </h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-secondary">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  className="nav-link inline-block py-1 transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-section reveal-hidden reveal-delay-3 p-12 md:col-span-4">
          <h4 className="mb-12 inline-block border-b-4 border-charcoal pb-1 text-xs font-black uppercase tracking-[0.3em]">
            Legal Appendices
          </h4>
          <ul className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest text-archival">
            {LEGAL_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  className="nav-link inline-block transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-primary p-4 text-center text-[10px] font-black uppercase tracking-[1em] text-white">
        ENDE DES DOKUMENTS // EINGESTUFT: ÖFFENTLICH
      </div>
    </footer>
  );
}
