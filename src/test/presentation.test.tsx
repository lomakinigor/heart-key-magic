import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { PRESENTATION_TITLE, TOTAL_SLIDES } from "@/lib/presentation";
import SlidePhotoWow from "@/components/presentation/SlidePhotoWow";

describe("portfolio presentation", () => {
  it("contains five slides", () => {
    expect(TOTAL_SLIDES).toBe(5);
  });

  it("names the product for the portfolio audience", () => {
    expect(PRESENTATION_TITLE).toBe("Сценарист романтических свиданий");
  });

  it("shows the first scenario as free in the pricing row", () => {
    render(<SlidePhotoWow clickCount={4} />);

    expect(screen.getByText("Первый сценарий")).toBeInTheDocument();
    expect(screen.getByText("Бесплатно")).toBeInTheDocument();
  });

  it("builds assets for the GitHub Pages subpath", () => {
    const viteConfig = readFileSync("vite.config.ts", "utf8");

    expect(viteConfig).toContain('base: "/heart-key-magic/"');
  });

  it("uses a scrollable mobile layout with vertically stacked presentation cards", () => {
    const index = readFileSync("src/pages/Index.tsx", "utf8");
    const wrapper = readFileSync("src/components/presentation/SlideWrapper.tsx", "utf8");
    const problem = readFileSync("src/components/presentation/SlideProblem.tsx", "utf8");
    const photoWow = readFileSync("src/components/presentation/SlidePhotoWow.tsx", "utf8");

    expect(index).toContain("presentation-root");
    expect(wrapper).toContain("presentation-slide");
    expect(problem).toContain("grid-cols-1 md:grid-cols-5");
    expect(photoWow).toContain("grid-cols-1 md:grid-cols-3");
  });
});
