import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignLanguageVideo } from "../packages/isl-tools/src";

const meta = {
  title: "Sign language/SignLanguageVideo",
  component: SignLanguageVideo,
  tags: ["autodocs"],
  args: {
    title: "Indian Sign Language example",
    videoSrc: "/demo/isl-placeholder.mp4",
    poster: "/demo/isl-poster.svg",
    description: "Replace the placeholder with consented, rights-cleared signing media.",
    metadata: {
      languageName: "Indian Sign Language",
      signerCredit: "Approved public credit",
      consentReference: "demo-consent-reference",
      rightsStatement: "Documentation demo only",
      allowedUses: ["documentation demo"],
      aiTrainingAllowed: false
    }
  }
} satisfies Meta<typeof SignLanguageVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteMetadata: Story = {};
export const MissingMetadata: Story = { args: { metadata: undefined } };
