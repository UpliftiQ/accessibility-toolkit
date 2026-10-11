import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaptionPlayer } from "../packages/caption-player/src";

const meta = {
  title: "Media/CaptionPlayer",
  component: CaptionPlayer,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    title: "Photosynthesis lesson",
    videoSrc: "/demo/lesson-placeholder.mp4",
    poster: "/demo/lesson-poster.svg",
    captionTracks: [
      { src: "/demo/lesson-en.vtt", srcLang: "en", label: "English", default: true }
    ],
    signLanguage: {
      src: "/demo/isl-placeholder.mp4",
      poster: "/demo/isl-poster.svg",
      label: "Indian Sign Language video placeholder"
    },
    transcript: [
      { id: "cue-1", start: 0, end: 5, speaker: "Educator", text: "Plants use sunlight to create energy." },
      { id: "cue-2", start: 5, end: 10, speaker: "Educator", text: "This process is called photosynthesis." }
    ]
  }
} satisfies Meta<typeof CaptionPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBySide: Story = {};
export const TranscriptOpen: Story = { args: { defaultTranscriptOpen: true } };
export const PrimaryVideoOnly: Story = { args: { signLanguage: undefined, defaultLayout: "primary-only" } };
