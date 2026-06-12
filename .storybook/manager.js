import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Sidebar branding. To use an image logo instead of the text title, drop a file
// in .storybook/ (e.g. logo.svg), `import logo from "./logo.svg"`, and set
// `brandImage: logo` below.
const theme = create({
  base: "dark",
  brandTitle: "VideoSDK component-book",
  brandUrl: "https://github.com/zujonow/component-book",
  brandTarget: "_blank",

  // Accent the UI with the VideoSDK brand purple.
  colorPrimary: "#d1bcfe",
  colorSecondary: "#a07ffb",
  appBg: "#0a0a0a",
  appContentBg: "#0a0a0a",
  appBorderColor: "#262626",
  barBg: "#111111",
});

addons.setConfig({ theme });
