import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastMessage, ButtonComponent } from "component-book";

// toastMessage delegates to react-toastify; the consumer app mounts the
// ToastContainer (the dashboard does this in its layout). We mount one here.
export default {
  title: "Misc/toastMessage",
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-3 p-4">
      <ButtonComponent
        label="Success"
        onClick={() => toastMessage({ type: "success", message: "Saved successfully." })}
      />
      <ButtonComponent
        label="Error"
        type="destructive"
        onClick={() => toastMessage({ type: "error", message: "Something went wrong." })}
      />
      <ButtonComponent
        label="Warning"
        type="secondary"
        onClick={() => toastMessage({ type: "warning", message: "Check your input." })}
      />
      <ToastContainer position="bottom-right" transition={undefined} />
    </div>
  ),
};

export const Triggers = {};
