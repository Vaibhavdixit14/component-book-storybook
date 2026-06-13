import { Button } from "component-book";

// component-book's button is now the shadcn-style `Button`:
// `variant` (not `type`), `children` (not `label`), `loading`/`loadingText`
// (not `isLoading`/`loadingLabel`), plus `asChild` for use as a Radix trigger.
const VARIANTS = [
  "primary",
  "secondary",
  "destructive",
  "text",
  "text-destructive",
  "outlined",
  "outlined-destructive",
  "outlined-dashed",
  "link",
];
const SIZES = ["xs", "sm", "default", "lg"];

export default {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    children: { control: "text" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    loadingText: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
    disabled: false,
    loading: false,
  },
  render: (args) => <Button {...args} />,
};

export const Default = {};

export const Disabled = { args: { disabled: true } };

export const Loading = { args: { loading: true, loadingText: "Saving..." } };

export const Destructive = { args: { variant: "destructive", children: "Delete" } };

/** Every variant × size, plus disabled and loading — the full state matrix. */
export const AllStates = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-400">
            {variant}
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {size}
              </Button>
            ))}
            <Button variant={variant} disabled>
              disabled
            </Button>
            <Button variant={variant} loading loadingText="loading">
              loading
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
