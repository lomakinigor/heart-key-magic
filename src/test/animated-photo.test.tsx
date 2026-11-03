import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AnimatedPhoto from "@/components/presentation/AnimatedPhoto";

describe("animated photo playback", () => {
  it("starts video from a user gesture without advancing the slide", async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    const advance = vi.fn();
    render(<div onClick={advance}><AnimatedPhoto /></div>);
    fireEvent.click(screen.getByRole("button", { name: /Оживить фото/ }));
    expect(play).toHaveBeenCalledOnce();
    expect(advance).not.toHaveBeenCalled();
    fireEvent.playing(screen.getByLabelText("Оживлённое фото"));
    expect(screen.queryByRole("button", { name: /Оживить фото/ })).not.toBeInTheDocument();
    play.mockRestore();
  });

  it("offers a retry when playback is rejected", async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, "play").mockRejectedValue(new Error("blocked"));
    render(<AnimatedPhoto />);
    fireEvent.click(screen.getByRole("button", { name: /Оживить фото/ }));
    await waitFor(() => expect(screen.getByRole("button", { name: "Повторить запуск" })).toBeInTheDocument());
    play.mockRestore();
  });
});
