import { useState } from "react";
import { RadioGroupCards } from "component-book";

const PLANS = [
  { value: "starter", name: "Starter", description: "Up to 1,000 minutes / month." },
  { value: "pro", name: "Pro", description: "Up to 50,000 minutes / month." },
  { value: "enterprise", name: "Enterprise", description: "Custom volume & SLAs.", disabled: true },
];

export default {
  title: "Inputs/RadioGroupCards",
  component: RadioGroupCards,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => {
    const [value, setValue] = useState("starter");
    return (
      <div className="w-[360px] p-4">
        <RadioGroupCards dataArr={PLANS} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Default = {};
