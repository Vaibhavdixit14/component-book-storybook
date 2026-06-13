import { useState } from "react";
import { Dropdown, Button } from "component-book";
import { dropdownItems } from "../_shared/fixtures.jsx";

export default {
  title: "Overlays/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    leftIndicator: { control: "select", options: ["checkbox", "radio", "tick", "none", "icon"] },
    selectionMode: { control: "radio", options: ["single", "multi"] },
    searchable: { control: "boolean" },
    align: { control: "select", options: ["start", "center", "end"] },
  },
  args: { leftIndicator: "icon", selectionMode: "single", searchable: false, align: "start" },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    return (
      <div className="p-16">
        <Dropdown
          {...args}
          open={open}
          setOpen={setOpen}
          items={dropdownItems}
          selectedIds={selectedIds}
          onSelect={(item) => setSelectedIds([item.id])}
          trigger={
            <Button variant="secondary" onClick={() => setOpen((o) => !o)}>
              Open menu
            </Button>
          }
        />
      </div>
    );
  },
};

export const Default = {};
export const Searchable = { args: { searchable: true, leftIndicator: "checkbox", selectionMode: "multi" } };
