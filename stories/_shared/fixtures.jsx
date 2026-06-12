// Shared fixtures + helpers reused across stories.
import { useState } from "react";
import {
  Plus,
  Search,
  Settings,
  Trash2,
  Download,
  Check,
  Bell,
  User,
  Phone,
  Video,
  Pencil,
} from "lucide-react";

export const icons = {
  Plus,
  Search,
  Settings,
  Trash2,
  Download,
  Check,
  Bell,
  User,
  Phone,
  Video,
  Pencil,
};

export const selectOptions = [
  { value: "us", label: "United States" },
  { value: "in", label: "India" },
  { value: "de", label: "Germany" },
  { value: "jp", label: "Japan" },
];

export const checkboxOptions = [
  { value: "audio", name: "Audio" },
  { value: "video", name: "Video" },
  { value: "screen", name: "Screen share" },
];

export const radioOptions = [
  { value: "low", name: "Low" },
  { value: "medium", name: "Medium" },
  { value: "high", name: "High", disabled: true },
];

export const dropdownItems = [
  { id: "1", label: "Edit", value: "edit", icon: Pencil },
  { id: "2", label: "Download", value: "download", icon: Download },
  { id: "3", label: "Delete", value: "delete", icon: Trash2, disabled: true },
];

// Sample table data for the composed Data Table story.
export const tableColumns = ["Name", "Status", "Region", "Created"];
export const tableRowsData = [
  { name: "prod-meeting-01", status: "Active", region: "us-east", created: "2026-05-01" },
  { name: "vod-render-22", status: "Queued", region: "ap-south", created: "2026-05-04" },
  { name: "stream-live-09", status: "Failed", region: "eu-central", created: "2026-05-09" },
];

/**
 * Renders a story body that needs local state. Usage:
 *   render: () => <Stateful initial={false}>{(val, set) => <Switch enabled={val} onConfirmChange={set} />}</Stateful>
 */
export function Stateful({ initial, children }) {
  const [value, setValue] = useState(initial);
  return children(value, setValue);
}

// A simple dark padded canvas so centered stories have breathing room.
export function Canvas({ children, className = "" }) {
  return <div className={`flex flex-col gap-4 p-4 ${className}`}>{children}</div>;
}
