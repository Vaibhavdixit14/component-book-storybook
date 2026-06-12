import { ButtonComponent } from "component-book";

const TYPES = [
  "primary",
  "secondary",
  "destructive",
  "text",
  "outlined",
  "outlined-destructive",
  "link",
];
const SIZES = ["xs", "small", "default", "large"];

export default {
  title: "Buttons/ButtonComponent",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: TYPES },
    size: { control: "select", options: SIZES },
    label: { control: "text" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    isIconButton: { control: "boolean" },
    loadingLabel: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    label: "Button",
    type: "primary",
    size: "default",
    disabled: false,
    isLoading: false,
  },
};

export const Default = {};

export const Disabled = { args: { disabled: true } };

export const Loading = { args: { isLoading: true, loadingLabel: "Saving..." } };

export const Destructive = { args: { type: "destructive", label: "Delete" } };

/** Every type × size, plus disabled and loading rows — the full state matrix. */
export const AllStates = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {TYPES.map((type) => (
        <div key={type} className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-400">
            {type}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((size) => (
              <ButtonComponent key={size} type={type} size={size} label={size} />
            ))}
            <ButtonComponent type={type} label="disabled" disabled />
            <ButtonComponent type={type} label="loading" isLoading />
          </div>
        </div>
      ))}
    </div>
  ),
};
