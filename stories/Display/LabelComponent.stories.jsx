import { LabelComponent } from "component-book";

export default {
  title: "Display/LabelComponent",
  component: LabelComponent,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    active: { control: "boolean" },
    noBottomMargin: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: { children: "Overview", active: false },
};

export const Default = {};
export const Active = { args: { active: true } };

export const TabRow = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-6 border-b border-white/10 p-4">
      <LabelComponent active onClick={() => {}}>Overview</LabelComponent>
      <LabelComponent onClick={() => {}}>Usage</LabelComponent>
      <LabelComponent onClick={() => {}}>Settings</LabelComponent>
    </div>
  ),
};
