import { PlayerComponent } from "component-book";

export default {
  title: "Media/PlayerComponent",
  component: PlayerComponent,
  tags: ["autodocs"],
  parameters: { chromatic: { disableSnapshot: true } },
  argTypes: {
    duration: { control: "number" },
    onPlayPause: { action: "play/pause" },
    onSeek: { action: "seek" },
    onSpeedChange: { action: "speed" },
  },
  args: { duration: 300 },
  render: (args) => (
    <div className="w-[560px] p-4">
      <PlayerComponent {...args} />
    </div>
  ),
};

// Uncontrolled — internal play/seek/speed state.
export const Default = {};
