import { PopoverActionButton } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Buttons/PopoverActionButton",
  component: PopoverActionButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    danger: { control: "boolean" },
    disabled: { control: "boolean" },
    marginBottomShow: { control: "boolean" },
    onClick: { action: "clicked" },
    icon: { control: false },
  },
  args: { label: "Edit", danger: false, disabled: false, marginBottomShow: true },
  render: (args) => (
    <div className="w-48 rounded-lg bg-white/5 p-1">
      <PopoverActionButton {...args} icon={icons.Pencil} />
    </div>
  ),
};

export const Default = {};
export const Danger = { args: { label: "Delete", danger: true } };
export const Disabled = { args: { disabled: true } };

export const Menu = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="w-48 rounded-lg bg-white/5 p-1">
      <PopoverActionButton label="Edit" icon={icons.Pencil} onClick={() => {}} />
      <PopoverActionButton label="Settings" icon={icons.Settings} onClick={() => {}} />
      <PopoverActionButton label="Delete" icon={icons.Trash2} danger onClick={() => {}} />
    </div>
  ),
};
