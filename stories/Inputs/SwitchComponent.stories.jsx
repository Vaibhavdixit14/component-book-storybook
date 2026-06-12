import { useState } from "react";
import { SwitchComponent } from "component-book";

export default {
  title: "Inputs/SwitchComponent",
  component: SwitchComponent,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    showEnabled: { control: "boolean" },
    showSeparator: { control: "boolean" },
  },
  args: { name: "Enable recording", showEnabled: true },
  render: (args) => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="w-[320px] p-4">
        <SwitchComponent {...args} enabled={enabled} onConfirmChange={setEnabled} />
      </div>
    );
  },
};

export const Default = {};
export const NoLabel = { args: { name: undefined, showEnabled: false } };

export const States = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [a, setA] = useState(true);
    const [b, setB] = useState(false);
    return (
      <div className="flex flex-col gap-4 p-4">
        <SwitchComponent name="On" enabled={a} onConfirmChange={setA} showEnabled />
        <SwitchComponent name="Off" enabled={b} onConfirmChange={setB} showEnabled />
      </div>
    );
  },
};
