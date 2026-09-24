import { useState } from "react";
import { CheckboxGroupCards } from "component-book";

const FEATURES = [
  { value: "recording", name: "Recording", description: "Store session recordings." },
  { value: "transcription", name: "Transcription", description: "Generate transcripts after each session." },
  { value: "analytics", name: "Analytics", description: "Available on the Enterprise plan.", disabled: true },
];

export default {
  title: "Inputs/CheckboxGroupCards",
  component: CheckboxGroupCards,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => {
    const [values, setValues] = useState(["recording"]);
    return (
      <div className="w-[360px] p-4">
        <CheckboxGroupCards dataArr={FEATURES} values={values} onChange={setValues} />
      </div>
    );
  },
};

export const Default = {};
