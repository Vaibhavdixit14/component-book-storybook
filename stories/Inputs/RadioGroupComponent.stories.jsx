import { useState } from "react";
import { RadioGroupComponent } from "component-book";
import { radioOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Inputs/RadioGroupComponent",
  component: RadioGroupComponent,
  tags: ["autodocs"],
  argTypes: { name: { control: "text" } },
  args: { name: "Quality" },
  render: (args) => {
    const [value, setValue] = useState("low");
    return (
      <div className="w-[320px] p-4">
        <RadioGroupComponent {...args} dataArr={radioOptions} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Default = {};
