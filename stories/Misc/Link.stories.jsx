import { Link } from "component-book";

export default {
  title: "Misc/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
    target: { control: "select", options: [undefined, "_blank", "_self"] },
  },
  args: {
    href: "https://videosdk.live",
    children: "Open documentation",
    target: "_blank",
  },
  render: (args) => (
    <div className="p-4 text-sm text-primary-200 underline">
      <Link {...args} />
    </div>
  ),
};

export const Default = {};
