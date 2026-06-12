import { DropdownButton } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Buttons/DropdownButton",
  component: DropdownButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    buttonType: {
      control: "select",
      options: ["primary", "secondary", "destructive", "text", "outlined", "link"],
    },
    buttonSize: { control: "select", options: ["xs", "small", "default", "large"] },
    align: { control: "select", options: ["start", "center", "end"] },
  },
  args: {
    label: "Actions",
    buttonType: "secondary",
    buttonSize: "default",
    align: "end",
    options: [
      { id: "edit", label: "Edit", icon: icons.Pencil, onClick: () => {} },
      { id: "download", label: "Download", icon: icons.Download, onClick: () => {} },
      { id: "delete", label: "Delete", color: "destructive", icon: icons.Trash2, onClick: () => {} },
    ],
  },
};

export const Default = {};
export const Primary = { args: { buttonType: "primary", label: "Create" } };
