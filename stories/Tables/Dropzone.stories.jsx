import { Dropzone, DropzoneEmptyState, DropzoneContent } from "component-book";

export default {
  title: "Tables/Dropzone",
  component: Dropzone,
  subcomponents: { DropzoneEmptyState, DropzoneContent },
  tags: ["autodocs"],
  argTypes: {
    maxFiles: { control: "number" },
    disabled: { control: "boolean" },
  },
  args: { maxFiles: 1, disabled: false },
  render: (args) => (
    <div className="w-[420px] p-4">
      <Dropzone
        {...args}
        accept={{ "image/*": [] }}
        onDrop={() => {}}
        src={undefined}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  ),
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
