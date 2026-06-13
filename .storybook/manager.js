import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import logo from "./MainLogo.svg";
import { favicon } from "./favicon.js";

// Use the favicon that lives alongside this config (overrides Storybook's
// default favicon link, which is otherwise an svg).
const iconLink =
  document.querySelector("link[rel~='icon']") || document.createElement("link");
iconLink.rel = "icon";
iconLink.type = "image/x-icon";
iconLink.href = favicon;
document.head.appendChild(iconLink);

// Sidebar branding. The VideoSDK wordmark (MainLogo.svg in this folder) is the
// logo; brandTitle stays as the image alt text.
const theme = create({
  base: "dark",
  brandTitle: "VideoSDK component-book",
  brandImage: logo,
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
