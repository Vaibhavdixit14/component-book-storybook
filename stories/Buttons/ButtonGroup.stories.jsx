import {
  Button,
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "component-book";

// component-book's ButtonGroup connects buttons/inputs into a single unit
// (shared rounded ends, collapsed inner borders). The group itself only takes
// `orientation` ("horizontal" | "vertical"); variants/sizes live on the child
// Buttons. ButtonGroupText adds a non-interactive label cell, and
// ButtonGroupSeparator draws a divider between cells.
const ORIENTATIONS = ["horizontal", "vertical"];

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "inline-radio", options: ORIENTATIONS },
  },
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outlined">One</Button>
      <Button variant="outlined">Two</Button>
      <Button variant="outlined">Three</Button>
    </ButtonGroup>
  ),
};

export const Default = {};

export const Vertical = { args: { orientation: "vertical" } };

/** A label cell joined to an input-like action via a separator. */
export const WithText = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outlined">videosdk.live</Button>
    </ButtonGroup>
  ),
};

/** Both orientations side by side — the full layout matrix. */
export const AllStates = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {ORIENTATIONS.map((orientation) => (
        <div key={orientation} className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-400">
            {orientation}
          </span>
          <ButtonGroup orientation={orientation}>
            <Button variant="outlined">One</Button>
            <Button variant="outlined">Two</Button>
            <Button variant="outlined">Three</Button>
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
};
