import { useState } from "react";
import { FilterCheckbox, Chip } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Filters/FilterCheckbox",
  component: FilterCheckbox,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "Regions" },
  render: (args) => {
    const [value, setValue] = useState([]);
    return (
      <div className="p-16">
        <FilterCheckbox
          {...args}
          options={selectOptions}
          value={value}
          TriggerComponent={Chip}
          selectedLabel={value.length ? `${value.length} selected` : undefined}
          onApply={setValue}
          onCancel={() => setValue([])}
        />
      </div>
    );
  },
};

export const Default = {};
