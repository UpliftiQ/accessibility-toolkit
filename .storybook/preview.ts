import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "paper",
      values: [
        { name: "paper", value: "#f7f5ef" },
        { name: "dark", value: "#11152f" }
      ]
    }
  }
};

export default preview;
