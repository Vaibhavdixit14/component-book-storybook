import { useState } from "react";
import { FilterDateRange, Chip } from "component-book";

export default {
  title: "Filters/FilterDateRange",
  component: FilterDateRange,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    mode: { control: "radio", options: ["range", "single"] },
    includeTime: { control: "boolean" },
  },
  args: { label: "Date range", mode: "range", includeTime: false },
  render: (args) => {
    const [range, setRange] = useState({ startDate: undefined, endDate: undefined });
    return (
      <div className="p-16">
        <FilterDateRange
          {...args}
          startDate={range.startDate}
          endDate={range.endDate}
          TriggerComponent={Chip}
          onApply={setRange}
          onCancel={() => setRange({ startDate: undefined, endDate: undefined })}
        />
      </div>
    );
  },
};

export const Range = {};
export const Single = { args: { mode: "single", label: "Date" } };
export const WithTime = { args: { includeTime: true } };
