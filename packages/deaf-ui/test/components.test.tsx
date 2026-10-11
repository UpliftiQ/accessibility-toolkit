import axe from "axe-core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StepProgress, VisualAlert, VisualTimer } from "../src";

describe("deaf-ui", () => {
  it("announces and dismisses a visual alert", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <VisualAlert title="Captions ready" variant="success" onDismiss={onDismiss}>
        English captions are available.
      </VisualAlert>
    );

    expect(screen.getByRole("status")).toHaveTextContent("Captions ready");
    await user.click(screen.getByRole("button", { name: "Dismiss notification" }));
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it("marks the current progress step", () => {
    render(
      <StepProgress
        currentStep={1}
        steps={[
          { id: "one", label: "Profile" },
          { id: "two", label: "Preferences" },
          { id: "three", label: "Complete" }
        ]}
      />
    );
    expect(screen.getByText("Preferences").closest("li")).toHaveAttribute("aria-current", "step");
  });

  it("exposes readable visual timer progress", async () => {
    const { container } = render(<VisualTimer totalSeconds={300} remainingSeconds={45} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuetext", "0:45 remaining");
    const results = await axe.run(container, {
      rules: { "color-contrast": { enabled: false } }
    });
    expect(results.violations).toEqual([]);
  });
});
