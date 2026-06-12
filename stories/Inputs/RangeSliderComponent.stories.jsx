import { useState } from "react";
import { RangeSliderComponent } from "component-book";

export default {
  title: "Inputs/RangeSliderComponent",
  component: RangeSliderComponent,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    variant: { control: "radio", options: ["purple", "grey"] },
    showContainer: { control: "boolean" },
    showRightValue: { control: "boolean" },
  },
  args: { name: "Participants", min: 1, max: 25, variant: "purple", showContainer: true },
  render: (args) => {
    const [value, setValue] = useState(8);
    return (
      <div className="w-[360px] p-4">
        <RangeSliderComponent
          {...args}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          rightValue={value}
        />
      </div>
    );
  },
};

export const Default = {};
export const Grey = { args: { variant: "grey" } };
