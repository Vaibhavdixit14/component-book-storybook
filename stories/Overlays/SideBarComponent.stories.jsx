import { useState } from "react";
import { SideBarComponent, Button } from "component-book";

export default {
  title: "Overlays/SideBarComponent",
  component: SideBarComponent,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    description: { control: "text" },
    headerDivider: { control: "boolean" },
  },
  args: {
    heading: "Edit number",
    description: "Update the configuration for this phone number.",
    headerDivider: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Open sidebar</Button>
        <SideBarComponent
          {...args}
          open={open}
          onOpenChange={setOpen}
          footer={() => (
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </div>
          )}
        >
          <p className="text-sm text-neutral-300">Sidebar body content goes here.</p>
        </SideBarComponent>
      </div>
    );
  },
};

export const Default = {};
