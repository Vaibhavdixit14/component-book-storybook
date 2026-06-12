import { useState } from "react";
import { FilterComponent, Chip } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Filters/FilterComponent",
  component: FilterComponent,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "Region" },
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <div className="p-16">
        <FilterComponent
          {...args}
          options={selectOptions}
          value={value}
          TriggerComponent={Chip}
          selectedLabel={value ? selectOptions.find((o) => o.value === value)?.label : undefined}
          onApply={setValue}
          onCancel={() => setValue(null)}
        />
      </div>
    );
  },
};

export const Default = {};
