import { useState } from "react";
import { FilterCalendar, Chip } from "component-book";

export default {
  title: "Filters/FilterCalendar",
  component: FilterCalendar,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "Date" },
  render: (args) => {
    const [value, setValue] = useState(null);
    return (
      <div className="p-16">
        <FilterCalendar
          {...args}
          value={value}
          TriggerComponent={Chip}
          onApply={setValue}
          onCancel={() => setValue(null)}
        />
      </div>
    );
  },
};

export const Default = {};
