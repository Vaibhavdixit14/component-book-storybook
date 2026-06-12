import { PopoverComponent, PopoverActionButton } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Overlays/PopoverComponent",
  component: PopoverComponent,
  tags: ["autodocs"],
  argTypes: {
    buttonLabel: { control: "text" },
    buttonType: {
      control: "select",
      options: ["text", "primary", "secondary", "destructive", "outlined", "link"],
    },
    align: { control: "select", options: ["start", "center", "end"] },
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
  },
  args: { buttonLabel: "Options", buttonType: "secondary", align: "end", side: "bottom" },
  render: (args) => (
    <div className="p-16">
      <PopoverComponent {...args}>
        <div className="w-44 p-1">
          <PopoverActionButton label="Edit" icon={icons.Pencil} onClick={() => {}} />
          <PopoverActionButton label="Duplicate" icon={icons.Download} onClick={() => {}} />
          <PopoverActionButton label="Delete" icon={icons.Trash2} danger onClick={() => {}} />
        </div>
      </PopoverComponent>
    </div>
  ),
};

export const Default = {};
