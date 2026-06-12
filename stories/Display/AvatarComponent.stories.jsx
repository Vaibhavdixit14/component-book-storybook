import { AvatarComponent } from "component-book";

const SIZES = ["small", "default", "large", "medLarge", "extraLarge"];

export default {
  title: "Display/AvatarComponent",
  component: AvatarComponent,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    src: { control: "text" },
    size: { control: "select", options: SIZES },
    type: { control: "radio", options: ["round", "square"] },
    displayType: { control: "radio", options: ["primary", "secondary"] },
    showHoverIcon: { control: "boolean" },
  },
  args: { name: "Ada Lovelace", size: "default", type: "round", displayType: "primary" },
};

export const Initials = {};
export const WithImage = {
  args: { src: "https://i.pravatar.cc/150?img=12", name: "Ada Lovelace" },
};
export const Square = { args: { type: "square" } };

export const AllSizes = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-end gap-4 p-4">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <AvatarComponent name="Ada Lovelace" size={size} />
          <span className="text-xs text-neutral-400">{size}</span>
        </div>
      ))}
    </div>
  ),
};
