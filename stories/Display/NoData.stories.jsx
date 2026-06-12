import { NoData } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Display/NoData",
  component: NoData,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    Icon: { control: false },
  },
  args: {
    title: "No records found",
    message: "There is nothing here",
  },
};

export const Default = {};

export const WithAction = {
  args: {
    title: "No phone numbers yet",
    message: "Buy a number to start receiving calls.",
    Icon: icons.Phone,
    buttons: [{ label: "Buy number", type: "primary" }],
  },
};
