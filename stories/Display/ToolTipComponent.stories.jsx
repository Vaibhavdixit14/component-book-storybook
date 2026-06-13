import { ToolTipComponent, Button } from "component-book";

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
  // The shadcn Button forwards Radix's hover/focus props (TooltipTrigger uses
  // asChild), so it works directly as the tooltip trigger.
  render: (args) => (
    <div className="p-16">
      <ToolTipComponent {...args}>
        <Button variant="outlined">Hover me</Button>
      </ToolTipComponent>
    </div>
  ),
};

export const Default = {};
export const Right = { args: { side: "right" } };
