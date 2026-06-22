import { RuntimeOrb } from "component-book";

// component-book's RuntimeOrb is a pixel-grid orb that animates an AI agent's
// status. Props: `status` (idle | listening | thinking | speaking | asleep),
// `size` (px — auto-measures its container when omitted, so we pass an explicit
// size here), plus `className`/`style`. The colour palette is brand-aware
// (white for videosdk, blue for zeroruntime) and follows the brand toolbar wired
// up in .storybook/preview.jsx — flip the toolbar to preview both palettes.
const STATUSES = ["idle", "listening", "thinking", "speaking", "asleep"];

export default {
  title: "Display/RuntimeOrb",
  component: RuntimeOrb,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: STATUSES },
    size: { control: { type: "number", min: 32, max: 256, step: 8 } },
  },
  args: {
    status: "idle",
    size: 96,
  },
  render: (args) => <RuntimeOrb {...args} />,
};

export const Default = {};

export const Listening = { args: { status: "listening" } };

export const Thinking = { args: { status: "thinking" } };

export const Speaking = { args: { status: "speaking" } };

export const Asleep = { args: { status: "asleep" } };

/** Every status side by side — the full state matrix. */
export const AllStatuses = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap items-start gap-8 p-4">
      {STATUSES.map((status) => (
        <div key={status} className="flex flex-col items-center gap-2">
          <RuntimeOrb status={status} size={96} />
          <span className="text-xs uppercase tracking-wide text-neutral-400">
            {status}
          </span>
        </div>
      ))}
    </div>
  ),
};
