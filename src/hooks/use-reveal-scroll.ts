import { useEffect } from "react";

export function useRevealScroll(slide: number, step: number, lastStep: number) {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    // Wait for the slide transition and reveal animations to settle.
    const timer = window.setTimeout(() => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
      if (step === 0) {
        window.scrollTo({ top: 0, behavior });
        return;
      }
      if (step >= lastStep) {
        window.scrollTo({ top: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), behavior });
        return;
      }

      const element = document.querySelector(`[data-reveal-step="${step}"]`);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const navTop = document.querySelector(".presentation-nav")?.getBoundingClientRect().top ?? window.innerHeight;
      const visibleBottom = Math.min(navTop, window.innerHeight) - 16;
      if (rect.bottom > visibleBottom || rect.top < 16) {
        const offset = rect.height > visibleBottom - 16 ? rect.top - 16 : rect.bottom - visibleBottom;
        window.scrollTo({ top: Math.max(0, window.scrollY + offset), behavior });
      }
    }, 750);

    return () => window.clearTimeout(timer);
  }, [slide, step, lastStep]);
}
