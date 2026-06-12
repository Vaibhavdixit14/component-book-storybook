import { useState } from "react";
import { PhoneInput } from "component-book";

export default {
  title: "Inputs/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    message: { control: "text" },
    error: { control: "boolean" },
  },
  args: { label: "Phone number", error: false },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[360px] p-4">
        <PhoneInput {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Default = {};
export const Error = { args: { error: true, message: "Invalid phone number" } };
