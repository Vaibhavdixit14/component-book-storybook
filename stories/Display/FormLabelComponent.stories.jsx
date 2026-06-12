import { FormLabelComponent } from "component-book";

export default {
  title: "Display/FormLabelComponent",
  component: FormLabelComponent,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    required: { control: "boolean" },
    size: { control: "radio", options: ["default", "small"] },
  },
  args: {
    label: "Display name",
    description: "Shown to participants in the meeting.",
    required: true,
    size: "default",
  },
  render: (args) => (
    <div className="w-[360px] p-4">
      <FormLabelComponent {...args} />
    </div>
  ),
};

export const Default = {};
export const Optional = { args: { required: false } };
export const Small = { args: { size: "small" } };
