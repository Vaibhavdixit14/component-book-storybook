import { useState } from "react";
import { JsonEditor } from "component-book";

export default {
  title: "Misc/JsonEditor",
  component: JsonEditor,
  tags: ["autodocs"],
  argTypes: {
    rows: { control: "number" },
    error: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: { rows: 8, error: false, loading: false, disabled: false },
  render: (args) => {
    const [value, setValue] = useState(
      JSON.stringify({ brand: "videosdk", maxParticipants: 25, recording: true }, null, 2)
    );
    return (
      <div className="w-[480px] p-4">
        <JsonEditor {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Default = {};
export const Error = { args: { error: true } };
export const Disabled = { args: { disabled: true } };
