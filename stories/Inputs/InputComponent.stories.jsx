import { useState } from "react";
import { InputComponent } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Inputs/InputComponent",
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["text", "number", "password", "textarea", "searchComp"] },
    label: { control: "text" },
    labelMessage: { control: "text" },
    placeholder: { control: "text" },
    message: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    mandatory: { control: "boolean" },
    isLoading: { control: "boolean" },
    maxLength: { control: "number" },
    showClear: { control: "boolean" },
    showCopy: { control: "boolean" },
  },
  args: {
    type: "text",
    label: "Display name",
    labelMessage: "Shown to other participants",
    placeholder: "Enter a name",
    message: "Use your real name so teammates recognise you.",
    disabled: false,
    error: false,
    mandatory: false,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[360px] p-4">
        <InputComponent {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    );
  },
};

export const Default = {};
export const Mandatory = { args: { mandatory: true } };
export const Error = { args: { error: true, message: "This field is required" } };
export const Disabled = { args: { disabled: true } };
export const Loading = { args: { isLoading: true } };
export const Search = { args: { type: "searchComp", label: undefined, placeholder: "Search...", RightIcon: icons.Search } };
export const Textarea = { args: { type: "textarea", placeholder: "Write a description" } };
