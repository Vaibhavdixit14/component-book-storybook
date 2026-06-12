import { useState } from "react";
import { FilterValueDropdown, Chip } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

const items = selectOptions.map((o) => ({ id: o.value, value: o.value, label: o.label }));

export default {
  title: "Filters/FilterValueDropdown",
  component: FilterValueDropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    selectionMode: { control: "radio", options: ["single", "multi"] },
    placeholder: { control: "text" },
  },
  args: { label: "Region", selectionMode: "multi", placeholder: "Select" },
};

export const Inline = {
  render: (args) => {
    const [values, setValues] = useState([]);
    return (
      <div className="w-[320px] p-4">
        <FilterValueDropdown {...args} items={items} values={values} onChange={setValues} />
      </div>
    );
  },
};

export const ChipTrigger = {
  render: (args) => {
    const [values, setValues] = useState([]);
    return (
      <div className="p-16">
        <FilterValueDropdown
          {...args}
          items={items}
          values={values}
          onChange={setValues}
          TriggerComponent={Chip}
          selectedLabel={values.length ? `${values.length} selected` : undefined}
          onCancel={() => setValues([])}
        />
      </div>
    );
  },
};
