import { useState } from "react";
import { DatePickerDemo } from "component-book";

export default {
  title: "Inputs/DatePickerDemo",
  component: DatePickerDemo,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    dateFormat: { control: "text" },
    showClear: { control: "boolean" },
  },
  args: { placeholder: "Select date", dateFormat: "dd/MM/yyyy", showClear: true },
  render: (args) => {
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    return (
      <div className="w-[320px] p-4">
        <DatePickerDemo
          {...args}
          date={date}
          onDateChange={setDate}
          open={open}
          setOpen={setOpen}
          onClear={() => setDate(null)}
        />
      </div>
    );
  },
};

export const Default = {};
