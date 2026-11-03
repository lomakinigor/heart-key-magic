import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useRevealScroll } from "@/hooks/use-reveal-scroll";

describe("mobile reveal scrolling", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({ matches: query.includes("max-width"), media: query }) as MediaQueryList);
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    document.body.innerHTML = "";
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("moves a revealed card above navigation", () => {
    const card = document.createElement("div");
    card.dataset.revealStep = "2";
    const nav = document.createElement("div");
    nav.className = "presentation-nav";
    document.body.append(card, nav);
    vi.spyOn(card, "getBoundingClientRect").mockReturnValue({ top: 700, bottom: 900, height: 200 } as DOMRect);
    vi.spyOn(nav, "getBoundingClientRect").mockReturnValue({ top: 600 } as DOMRect);
    renderHook(() => useRevealScroll(1, 2, 5));
    act(() => vi.advanceTimersByTime(750));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 316, behavior: "smooth" });
  });

  it("shows the bottom after the last reveal, then resets on slide entry", () => {
    vi.spyOn(document.documentElement, "scrollHeight", "get").mockReturnValue(2400);
    vi.spyOn(document.body, "scrollHeight", "get").mockReturnValue(2200);
    const { rerender } = renderHook(({ slide, step }) => useRevealScroll(slide, step, 5), { initialProps: { slide: 1, step: 5 } });
    act(() => vi.advanceTimersByTime(750));
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 2400, behavior: "smooth" });
    rerender({ slide: 2, step: 0 });
    act(() => vi.advanceTimersByTime(750));
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: "smooth" });
  });

  it("does not scroll desktop slides", () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: false } as MediaQueryList);
    renderHook(() => useRevealScroll(1, 5, 5));
    act(() => vi.advanceTimersByTime(750));
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
