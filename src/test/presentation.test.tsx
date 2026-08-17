import { describe, it, expect } from "vitest";
import { PRESENTATION_TITLE, TOTAL_SLIDES } from "@/lib/presentation";

describe("portfolio presentation", () => {
  it("contains five slides", () => {
    expect(TOTAL_SLIDES).toBe(5);
  });

  it("names the product for the portfolio audience", () => {
    expect(PRESENTATION_TITLE).toBe("Сценарист романтических свиданий");
  });
});
