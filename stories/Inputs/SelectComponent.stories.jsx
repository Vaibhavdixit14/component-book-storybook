import { useState } from "react";
import { SelectComponent } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Inputs/SelectComponent",
  component: SelectComponent,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    message: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    mandatory: { control: "boolean" },
    check: { control: "boolean" },
    searchable: { control: "boolean" },
  },
  args: {
    label: "Region",
    placeholder: "Select a region",
    disabled: false,
    error: false,
    mandatory: false,
    check: true, // show the tick (checkmark) on the selected option, like the dashboard
    searchable: false, // v0.1.34: filter input inside the dropdown
  },
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <div className="w-[320px] p-4">
        <SelectComponent {...args} options={selectOptions} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Default = {};
export const Mandatory = { args: { mandatory: true } };
export const Error = { args: { error: true, message: "Please pick a region" } };
export const Disabled = { args: { disabled: true } };
export const Searchable = { args: { searchable: true } };
