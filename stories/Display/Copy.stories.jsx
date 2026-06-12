import { Copy } from "component-book";

export default {
  title: "Display/Copy",
  component: Copy,
  tags: ["autodocs"],
  argTypes: { value: { control: "text" } },
  args: { value: "sk_live_3f9a8b7c6d5e4f3a2b1c" },
  render: (args) => (
    <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 font-mono text-sm text-neutral-200">
      <span>{args.value}</span>
      <Copy {...args} />
    </div>
  ),
};

export const Default = {};
