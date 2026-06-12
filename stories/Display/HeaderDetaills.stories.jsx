import { HeaderDetaills } from "component-book";

export default {
  title: "Display/HeaderDetaills",
  component: HeaderDetaills,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="w-[640px] p-4">
      <HeaderDetaills
        rows={[
          [
            { label: "Status", value: "Active" },
            { label: "Region", value: "us-east" },
            { label: "Plan", value: "Pro" },
          ],
          [
            { label: "Created", value: "2026-05-01" },
            { label: "Owner", value: "ada@videosdk.live" },
          ],
        ]}
      />
    </div>
  ),
};

export const Default = {};
