import { useState } from "react";
import { SideBarComponent, ButtonComponent } from "component-book";

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
        <ButtonComponent label="Open sidebar" onClick={() => setOpen(true)} />
        <SideBarComponent
          {...args}
          open={open}
          onOpenChange={setOpen}
          footer={() => (
            <div className="flex justify-end gap-2">
              <ButtonComponent label="Cancel" type="secondary" onClick={() => setOpen(false)} />
              <ButtonComponent label="Save" onClick={() => setOpen(false)} />
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
