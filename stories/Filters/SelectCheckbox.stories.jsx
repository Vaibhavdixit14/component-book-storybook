import { useState } from "react";
import { SelectCheckbox, Chip } from "component-book";
import { selectOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Filters/SelectCheckbox",
  component: SelectCheckbox,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "Regions" },
  render: (args) => {
    const [value, setValue] = useState([]);
    return (
      <div className="p-16">
        <SelectCheckbox
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
