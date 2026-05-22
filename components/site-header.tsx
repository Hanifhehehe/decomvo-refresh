"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, InstagramIcon, MailIcon, MenuIcon } from "./site-icons";
import { NAV_ITEMS } from "./site-data";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPemCieRU1Bw7PdTKITEnL1zkzyRhWcTeKuSrqnaXHFmJvb8s7YMeyVMT9p5bW2INvoZTBN4xGdNDEewR89mnw1fkbaqh4Zvnl1F7u0RbnIV8PjextY1bOCZoeCsKDd-ujEtse4oCSZGGhM50l9voghX9e9nV3MZWniV7f2eGygPM-nINHQvqZv3D4mreDzfNGbcMd5SQHchK9jWMCkeSpHz0no94Xg2OK4lFtlYsxCseJ6cdf_lkdUD1X_tchz-5FZfESDzVzbV8";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-[60] border-b border-charcoal bg-white transition-all duration-300 ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div
          className={`header-inner mx-auto flex max-w-[1600px] items-center justify-between px-8 transition-all duration-300 ${
            isScrolled ? "py-4" : "py-6"
          }`}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/"
              onClick={(e) => handleNavLinkClick(e, "/")}
              className="flex items-center gap-4"
            >
              <Image
                alt="DeComVo Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                height={40}
                priority
                src={LOGO_SRC}
                width={240}
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-12 font-headline text-xs font-black uppercase tracking-[0.2em] md:flex">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.label}
                className={`nav-link transition-colors hover:text-primary ${
                  index === activeIndex ? "text-primary" : "text-secondary"
                }`}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <a
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center border border-charcoal transition-all duration-300 hover:bg-charcoal hover:text-white"
                href="#"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                aria-label="E-Mail"
                className="flex h-8 w-8 items-center justify-center border border-charcoal transition-all duration-300 hover:bg-charcoal hover:text-white"
                href="mailto:hey@hanif.cool"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              <button
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Menü öffnen"
                className="flex h-8 w-8 items-center justify-center border border-charcoal md:hidden"
                id="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(true)}
                type="button"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-white transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        <div className="flex h-full flex-col border-x border-charcoal">
          <div className="flex items-center justify-between border-b border-charcoal px-8 py-6">
            <span className="font-headline text-xl font-black uppercase tracking-widest">
              Archive Index
            </span>
            <button
              aria-label="Menü schließen"
              className="flex items-center justify-center border-2 border-charcoal p-2 transition-colors hover:bg-charcoal hover:text-white"
              id="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              type="button"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col divide-y-2 divide-charcoal font-headline text-3xl font-black uppercase tracking-tighter">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.label}
                className={`px-8 py-10 transition-colors ${
                  index === activeIndex
                    ? "bg-primary text-white"
                    : "hover:bg-surface-container-low"
                }`}
                href={item.href}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleNavLinkClick(e, item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto bg-charcoal p-12 text-white">
            <p className="text-xs font-bold uppercase leading-loose tracking-[0.3em]">
              MAKING DECOLONIZED VOICES HEARD.
              <br />
              EST. 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
