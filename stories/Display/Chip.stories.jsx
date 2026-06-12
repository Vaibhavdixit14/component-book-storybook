import { Chip } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Display/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    selectedLabel: { control: "text" },
    showCancel: { control: "boolean" },
    onCancel: { action: "cancelled" },
    onClick: { action: "clicked" },
    LeftIcon: { control: false },
  },
  args: { label: "Status", showCancel: true },
};

export const Default = {};
export const WithIcon = { args: { label: "Region", LeftIcon: icons.Plus } };
export const Selected = { args: { label: "Status", selectedLabel: "Active" } };
export const NoCancel = { args: { showCancel: false } };
