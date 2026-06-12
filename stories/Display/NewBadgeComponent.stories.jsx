import { NewBadgeComponent } from "component-book";

export default {
  title: "Display/NewBadgeComponent",
  component: NewBadgeComponent,
  tags: ["autodocs"],
  argTypes: { label: { control: "text" } },
  args: { label: "New" },
};

export const Default = {};
export const Beta = { args: { label: "Beta" } };
