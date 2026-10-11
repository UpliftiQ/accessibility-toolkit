import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepProgress, VisualAlert, VisualTimer } from "../packages/deaf-ui/src";

const alertMeta = {
  title: "Visual UI/VisualAlert",
  component: VisualAlert,
  tags: ["autodocs"],
  args: {
    title: "Captions ready",
    children: "English captions are available for this lesson.",
    variant: "success"
  }
} satisfies Meta<typeof VisualAlert>;

export default alertMeta;
type AlertStory = StoryObj<typeof alertMeta>;

export const SuccessAlert: AlertStory = {};
export const UrgentAlert: AlertStory = {
  args: { title: "Connection lost", children: "Your answer is saved. Reconnect to continue.", variant: "danger" }
};

export function ProgressExample() {
  return (
    <StepProgress
      currentStep={1}
      steps={[
        { id: "one", label: "Choose" },
        { id: "two", label: "Learn" },
        { id: "three", label: "Practice" },
        { id: "four", label: "Complete" }
      ]}
    />
  );
}

export function TimerExample() {
  return <VisualTimer totalSeconds={300} remainingSeconds={45} />;
}
