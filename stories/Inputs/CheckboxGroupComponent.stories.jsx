import { useState } from "react";
import { CheckboxGroupComponent } from "component-book";
import { checkboxOptions } from "../_shared/fixtures.jsx";

export default {
  title: "Inputs/CheckboxGroupComponent",
  component: CheckboxGroupComponent,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: { name: "Enabled modes", disabled: false },
  render: (args) => {
    const [values, setValues] = useState(["audio"]);
    return (
      <div className="w-[320px] p-4">
        <CheckboxGroupComponent
          {...args}
          dataArr={checkboxOptions}
          values={values}
          onChange={setValues}
          optionClass="flex-col gap-2"
        />
      </div>
    );
  },
};

export const Group = {};
export const Disabled = { args: { disabled: true } };

export const Single = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div className="w-[320px] p-4">
        <CheckboxGroupComponent
          dataArr={[{ name: "Loop audio", value: "loop" }]}
          values={on ? ["loop"] : []}
          onChange={(vals) => setOn(vals.includes("loop"))}
        />
      </div>
    );
  },
};
