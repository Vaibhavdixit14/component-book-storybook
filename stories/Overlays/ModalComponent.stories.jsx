import { useState } from "react";
import { ModalComponent, ButtonComponent } from "component-book";

export default {
  title: "Overlays/ModalComponent",
  component: ModalComponent,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    showSeparator: { control: "boolean" },
    scrollBody: { control: "boolean" },
  },
  args: {
    title: "Invite teammate",
    subtitle: "They'll get access to this workspace.",
    showSeparator: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-4">
        <ButtonComponent label="Open modal" onClick={() => setOpen(true)} />
        <ModalComponent
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          primaryAction={{ label: "Send invite", onClick: () => setOpen(false) }}
          secondaryAction={{ label: "Cancel", onClick: () => setOpen(false), type: "secondary" }}
        >
          <p className="py-2 text-sm text-neutral-300">
            Enter an email address to invite a new member to the team.
          </p>
        </ModalComponent>
      </div>
    );
  },
};

export const Default = {};
