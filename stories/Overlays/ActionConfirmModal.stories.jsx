import { useState } from "react";
import { ActionConfirmModal, Button } from "component-book";

export default {
  title: "Overlays/ActionConfirmModal",
  component: ActionConfirmModal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    message: { control: "text" },
    confirmText: { control: "text" },
    cancelText: { control: "text" },
    confirmButtonType: { control: "text" },
  },
  args: {
    title: "Delete API key?",
    message: "This action cannot be undone.",
    confirmText: "Delete",
    cancelText: "Cancel",
    confirmButtonType: "destructive",
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-4">
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete...</Button>
        <ActionConfirmModal
          {...args}
          open={open}
          setOpen={setOpen}
          onConfirm={() => {}}
        />
      </div>
    );
  },
};

export const Default = {};
