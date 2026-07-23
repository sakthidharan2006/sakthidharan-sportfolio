import { useEffect } from "react";
import Lenis from "lenis";

/**
 * High-refresh-rate smooth scroll (optimised for 120/144Hz+ displays).
 * Uses frame-rate independent lerp so motion stays buttery on any monitor.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    // Respect reduced-motion preference
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      // lerp-driven (frame-rate independent) — scales naturally to 144Hz+
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
      syncTouch: true,
      syncTouchLerp: 0.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    // Drive Lenis with rAF timestamp for perfect vsync alignment
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Hijack in-page anchor clicks for smooth navigation
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.1 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
};
