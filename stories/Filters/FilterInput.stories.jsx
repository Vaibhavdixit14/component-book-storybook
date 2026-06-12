import { useState } from "react";
import { FilterInput, Chip } from "component-book";

export default {
  title: "Filters/FilterInput",
  component: FilterInput,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" }, placeholder: { control: "text" } },
  args: { label: "Name", placeholder: "Enter value" },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="p-16">
        <FilterInput
          {...args}
          value={value}
          TriggerComponent={Chip}
          selectedLabel={value || undefined}
          onApply={setValue}
          onCancel={() => setValue("")}
        />
      </div>
    );
  },
};

export const Default = {};
