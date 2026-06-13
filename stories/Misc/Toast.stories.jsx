import { ToastContainer } from "react-toastify";
// Base CSS provides container positioning/animation; the kill-UI props on
// ToastContainer below strip the default background so only the component-book
// toast styling shows.
import "react-toastify/dist/ReactToastify.css";
import { toastMessage, Button } from "component-book";

// toastMessage delegates to react-toastify; the consumer app mounts the
// ToastContainer (the dashboard does this in its layout). We mount one here.
export default {
  title: "Misc/toastMessage",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-3 p-4">
      <Button
        onClick={() => toastMessage({ type: "success", message: "Saved successfully." })}
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() => toastMessage({ type: "error", message: "Something went wrong." })}
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() => toastMessage({ type: "warning", message: "Check your input." })}
      >
        Warning
      </Button>
      {/* Match the dashboard: strip react-toastify's default UI so only the
          component-book toast styling shows (no extra background/shadow). */}
      <ToastContainer
        position="top-center"
        toastClassName={() => "bg-transparent p-0 shadow-none border-none"}
        bodyClassName={() => "p-0 m-0"}
        className="bg-transparent!"
        closeButton={false}
        icon={false}
        hideProgressBar
        newestOnTop
        limit={3}
      />
    </div>
  ),
};

export const Triggers = {};
