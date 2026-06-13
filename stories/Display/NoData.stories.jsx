import { NoData } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Display/NoData",
  component: NoData,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    // `buttons` is an array of button configs ({ label, type, onClick, ... }).
    // Edit it live in the Controls panel — add/remove/change buttons.
    buttons: { control: "object" },
    Icon: { control: false },
  },
  args: {
    title: "No phone numbers yet",
    message: "Buy a number to start receiving calls.",
    Icon: icons.Phone,
    buttons: [
      { label: "Buy number", type: "primary" },
      { label: "Learn more", type: "secondary" },
    ],
  },
};

// Two buttons (primary + secondary), editable via Controls.
export const Default = {};

// No buttons / plain empty state.
export const NoButtons = {
  args: {
    title: "No records found",
    message: "There is nothing here",
    Icon: undefined,
    buttons: [],
  },
};
