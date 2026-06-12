import { ToolTipComponent } from "component-book";

export default {
  title: "Display/ToolTipComponent",
  component: ToolTipComponent,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    content: { control: "text" },
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
  },
  args: {
    heading: "Keyboard shortcut",
    content: "Press ⌘K to open the command palette.",
    side: "top",
  },
  // Trigger must forward Radix's hover/focus props, so use a native element
  // (ButtonComponent doesn't spread arbitrary props onto its <button>).
  render: (args) => (
    <div className="p-16">
      <ToolTipComponent {...args}>
        <button className="rounded-2xl border border-white/15 px-3 py-1.5 text-sm text-white hover:bg-white/5">
          Hover me
        </button>
      </ToolTipComponent>
    </div>
  ),
};

export const Default = {};
export const Right = { args: { side: "right" } };
