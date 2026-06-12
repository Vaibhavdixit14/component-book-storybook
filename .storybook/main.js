/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|jsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // Controls, Actions, Docs, Viewport and Backgrounds are built into Storybook
  // core (v9+), so no addon-essentials is needed.
};

export default config;
