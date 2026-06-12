import { VideoPlayer } from "component-book";

export default {
  title: "Media/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
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
