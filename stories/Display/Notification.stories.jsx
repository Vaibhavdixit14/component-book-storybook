import { Notification } from "component-book";

const TYPES = ["success", "neutral", "info", "warning", "error"];

export default {
  title: "Display/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: TYPES },
    variant: { control: "radio", options: ["filled", "outline"] },
    title: { control: "text" },
    message: { control: "text" },
    showClose: { control: "boolean" },
    onClose: { action: "closed" },
  },
  args: {
    type: "info",
    variant: "filled",
    title: "Heads up",
    message: "This action will affect billing.",
    showClose: false,
  },
};

export const Default = {};

export const AllTypes = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-[420px] flex-col gap-3 p-4">
      {TYPES.map((type) => (
        <Notification
          key={type}
          type={type}
          title={type[0].toUpperCase() + type.slice(1)}
          message={`This is a ${type} notification.`}
        />
      ))}
    </div>
  ),
};

export const Outline = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex w-[420px] flex-col gap-3 p-4">
      {TYPES.map((type) => (
        <Notification key={type} type={type} variant="outline" title={type} message={`${type} outline`} />
      ))}
    </div>
  ),
};
