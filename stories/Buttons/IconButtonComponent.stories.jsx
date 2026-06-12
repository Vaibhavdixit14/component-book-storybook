import { IconButtonComponent } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

const VARIANTS = [
  "primary",
  "secondary",
  "text",
  "outlined",
  "action",
  "text-destructive",
  "outlined-destructive",
];
const SIZES = ["sm", "md", "lg"];

export default {
  title: "Buttons/IconButtonComponent",
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    disabled: { control: "boolean" },
    icon: { control: false },
    onClick: { action: "clicked" },
  },
  args: { variant: "primary", size: "md", disabled: false },
  render: (args) => <IconButtonComponent {...args} icon={icons.Settings} />,
};

export const Default = {};
export const Disabled = { args: { disabled: true } };

export const AllVariants = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-400">{variant}</span>
          <div className="flex items-center gap-3">
            {SIZES.map((size) => (
              <IconButtonComponent key={size} variant={variant} size={size} icon={icons.Settings} />
            ))}
            <IconButtonComponent variant={variant} icon={icons.Settings} disabled />
          </div>
        </div>
      ))}
    </div>
  ),
};
