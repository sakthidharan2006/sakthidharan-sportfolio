import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll tuned for responsive devices.
 * Desktop gets Lenis wheel smoothing; touch devices keep native momentum scrolling.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isCompactViewport = window.matchMedia("(max-width: 767px)").matches;
    const headerOffset = 72;

    const scrollNative = (el: Element) => {
      const targetTop = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    };

    let lenis: Lenis | null = null;

    if (!isTouchDevice && !isCompactViewport) {
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        syncTouch: false,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }

    let rafId = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    if (lenis) {
      rafId = requestAnimationFrame(raf);
    }

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -headerOffset, duration: 1.05 });
        return;
      }

      scrollNative(el);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return null;
};
