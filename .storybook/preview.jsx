import { useEffect } from "react";
import { ComponentBookProvider, DEFAULT_BRAND } from "component-book";

// Library styles imported directly via JS (same as the dashboard) so the
// library's relative `@import url(...)` lines resolve in their own folder.
import "component-book/styles";
import "component-book/styles/runtime-overrides";
// Separate tiny Tailwind root that scans story files for layout utilities.
import "../styles/globals.css";

/**
 * Global decorator:
 *  - Forces `.dark` on <html> (the design tokens are dark-locked, same as the dashboard).
 *  - Wraps every story in ComponentBookProvider, keyed on the toolbar `brand` global so
 *    the provider effect re-applies (CSS vars + html.runtime corner shape) on switch.
 */
function withTheme(Story, context) {
  const brand = context.globals.brand ?? DEFAULT_BRAND;

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <ComponentBookProvider key={brand} theme={{ brand }}>
      <Story />
    </ComponentBookProvider>
  );
}

/** @type { import('@storybook/nextjs').Preview } */
const preview = {
  decorators: [withTheme],
  globalTypes: {
    brand: {
      description: "Design-system brand",
      defaultValue: DEFAULT_BRAND, // "videosdk"
      toolbar: {
        title: "Brand",
        icon: "paintbrush",
        items: [
          { value: "videosdk", title: "VideoSDK (purple / rounded)" },
          { value: "zeroruntime", title: "Zero Runtime (blue / sharp)" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dashboard-dark",
      values: [{ name: "dashboard-dark", value: "#0a0a0a" }],
    },
    a11y: { test: "todo" },
  },
};

export default preview;
