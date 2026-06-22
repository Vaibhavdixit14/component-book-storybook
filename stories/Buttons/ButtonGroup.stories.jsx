import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
  Dropdown,
} from "component-book";
import {
  Archive,
  MailOpen,
  Clock,
  CalendarPlus,
  ListPlus,
  Tag,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

// component-book's ButtonGroup connects buttons/inputs into a single unit
// (shared rounded ends, collapsed inner borders). The group itself only takes
// `orientation` ("horizontal" | "vertical"); variants/sizes live on the child
// Buttons. ButtonGroupText adds a non-interactive label cell, and
// ButtonGroupSeparator draws a divider between cells. A Dropdown trigger renders
// `asChild`, so a "..." menu button stays connected inside the group.
const ORIENTATIONS = ["horizontal", "vertical"];

const menuItems = [
  { id: "read", label: "Mark as Read", value: "read", icon: MailOpen },
  { id: "archive", label: "Archive", value: "archive", icon: Archive },
  { id: "snooze", label: "Snooze", value: "snooze", icon: Clock },
  { id: "calendar", label: "Add to Calendar", value: "calendar", icon: CalendarPlus },
  { id: "list", label: "Add to List", value: "list", icon: ListPlus },
  {
    id: "label",
    label: "Label As…",
    value: "label",
    icon: Tag,
    children: [
      { id: "work", label: "Work", value: "work" },
      { id: "personal", label: "Personal", value: "personal" },
    ],
  },
  { id: "trash", label: "Trash", value: "trash", icon: Trash2 },
];

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "inline-radio", options: ORIENTATIONS },
  },
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outlined">One</Button>
      <Button variant="outlined">Two</Button>
      <Button variant="outlined">Three</Button>
    </ButtonGroup>
  ),
};

export const Default = {};

export const Vertical = { args: { orientation: "vertical" } };

/** A label cell joined to an input-like action via a separator. */
export const WithText = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <ButtonGroupSeparator />
      <Button variant="outlined">videosdk.live</Button>
    </ButtonGroup>
  ),
};

/**
 * Real-world usage: action groups in a toolbar — a connected Archive/Report
 * pair, plus a Snooze split with an overflow "..." menu (Dropdown trigger
 * renders asChild so it stays inside the group).
 */
export const Toolbar = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex items-center gap-3 p-6">
        <ButtonGroup>
          <Button variant="outlined">Archive</Button>
          <Button variant="outlined">Report</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outlined">Snooze</Button>
          <Dropdown
            open={open}
            setOpen={setOpen}
            items={menuItems}
            leftIndicator="icon"
            align="end"
            onSelect={() => setOpen(false)}
            trigger={
              <Button
                variant="outlined"
                size="icon"
                aria-label="More actions"
                onClick={() => setOpen((o) => !o)}
              >
                <MoreHorizontal />
              </Button>
            }
          />
        </ButtonGroup>
      </div>
    );
  },
};

/** Both orientations side by side — the full layout matrix. */
export const AllStates = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {ORIENTATIONS.map((orientation) => (
        <div key={orientation} className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wide text-neutral-400">
            {orientation}
          </span>
          <ButtonGroup orientation={orientation}>
            <Button variant="outlined">One</Button>
            <Button variant="outlined">Two</Button>
            <Button variant="outlined">Three</Button>
          </ButtonGroup>
        </div>
      ))}
    </div>
  ),
};
