import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
});
