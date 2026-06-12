import { DeprecationNotice } from "component-book";

export default {
  title: "Display/DeprecationNotice",
  component: DeprecationNotice,
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[480px] p-4">
      <DeprecationNotice {...args} />
    </div>
  ),
};

export const Default = {};
