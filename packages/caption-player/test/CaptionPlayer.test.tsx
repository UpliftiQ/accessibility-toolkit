import axe from "axe-core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CaptionPlayer } from "../src";

const transcript = [
  {
    id: "cue-1",
    start: 0,
    end: 5,
    speaker: "Educator",
    text: "Plants use sunlight to create energy."
  }
];

function renderPlayer() {
  return render(
    <CaptionPlayer
      title="Photosynthesis lesson"
      videoSrc="/lesson.mp4"
      captionTracks={[
        { src: "/lesson-en.vtt", srcLang: "en", label: "English", default: true }
      ]}
      signLanguage={{ src: "/lesson-isl.mp4", label: "Indian Sign Language explanation" }}
      transcript={transcript}
    />
  );
}

describe("CaptionPlayer", () => {
  it("exposes layout and transcript controls", async () => {
    const user = userEvent.setup();
    renderPlayer();

    const overlayButton = screen.getByRole("button", { name: "Sign video overlay" });
    await user.click(overlayButton);
    expect(overlayButton).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "Show transcript" }));
    expect(screen.getByRole("region", { name: "Photosynthesis lesson transcript" })).toBeVisible();
  });

  it("has no automatically detectable accessibility violations", async () => {
    const { container } = renderPlayer();
    const results = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } }
    });
    expect(results.violations).toEqual([]);
  });
});
