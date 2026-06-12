import { useState } from "react";
import { FilterSelect, Chip } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Filters/FilterSelect",
  component: FilterSelect,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "Region" },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="p-16">
        <FilterSelect
          {...args}
          options={selectOptions}
          value={value}
          TriggerComponent={Chip}
          selectedLabel={value ? selectOptions.find((o) => o.value === value)?.label : undefined}
          onApply={setValue}
          onCancel={() => setValue("")}
        />
      </div>
    );
  },
};

export const Default = {};
