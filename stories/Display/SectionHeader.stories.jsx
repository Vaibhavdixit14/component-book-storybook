import { SectionHeader } from "component-book";

export default {
  title: "Display/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    type: { control: "radio", options: ["left", "center"] },
    size: { control: "radio", options: ["small", "large"] },
  },
  args: {
    title: "API keys",
    description: "Manage the keys used to authenticate requests.",
    type: "left",
    size: "small",
  },
  render: (args) => (
    <div className="w-[520px] p-4">
      <SectionHeader {...args} />
    </div>
  ),
};

export const Default = {};
export const Large = { args: { size: "large" } };
export const Centered = { args: { type: "center" } };
