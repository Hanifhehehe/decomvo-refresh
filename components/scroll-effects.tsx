"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section"),
    );

    if (isReducedMotion) {
      revealTargets.forEach((target) => target.classList.add("reveal-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    const parallaxImages = Array.from(
      document.querySelectorAll<HTMLImageElement>(".parallax-target"),
    );
    const genericParallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax="true"]'),
    );

    const handleScroll = () => {
      parallaxImages.forEach((img) => {
        const parent = img.parentElement;

        if (!parent) {
          return;
        }

        const rect = parent.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.top < viewHeight && rect.bottom > 0) {
          const totalDistance = viewHeight + rect.height;
          const scrolled = viewHeight - rect.top;
          const progress = scrolled / totalDistance;
          const translation = (progress - 0.5) * 30;

          img.style.transform = `translateY(${translation}%) scale(1.15)`;
        }
      });

      genericParallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.top < viewHeight && rect.bottom > 0) {
          const speed = Number.parseFloat(
            element.getAttribute("data-parallax-speed") ?? "0.1",
          );
          const scrolled = viewHeight - rect.top;
          const yPos = (scrolled - viewHeight / 2) * speed;

          element.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.requestAnimationFrame(handleScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
