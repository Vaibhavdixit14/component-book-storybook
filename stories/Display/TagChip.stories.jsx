import { TagChip } from "component-book";

export default {
  title: "Display/TagChip",
  component: TagChip,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    removable: { control: "boolean" },
    onRemove: { action: "removed" },
  },
  args: { label: "production", removable: false },
};

export const Default = {};
export const Removable = { args: { removable: true } };

export const Group = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      {["production", "staging", "us-east", "v0.1.12"].map((t) => (
        <TagChip key={t} label={t} removable onRemove={() => {}} />
      ))}
    </div>
  ),
};
