import { VideoPlayer } from "component-book";

export default {
  title: "Media/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  // Live playback is non-deterministic — skip visual-regression snapshots.
  parameters: { chromatic: { disableSnapshot: true } },
  argTypes: { src: { control: "text" }, minHeight: { control: "text" } },
  args: {
    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    minHeight: "320px",
  },
  render: (args) => (
    <div className="w-[640px] p-4">
      <VideoPlayer {...args} />
    </div>
  ),
};

export const Default = {};
