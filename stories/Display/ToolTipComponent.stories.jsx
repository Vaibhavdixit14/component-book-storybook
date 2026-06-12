import { ToolTipComponent, ButtonComponent } from "component-book";

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
  render: (args) => (
    <div className="p-16">
      <ToolTipComponent {...args}>
        <ButtonComponent label="Hover me" type="secondary" />
      </ToolTipComponent>
    </div>
  ),
};

export const Default = {};
export const Right = { args: { side: "right" } };
