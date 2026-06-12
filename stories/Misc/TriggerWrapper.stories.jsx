import { TriggerWrapper, ButtonComponent } from "component-book";

// Low-level helper: forwards a ref + props into a render-prop trigger.
// Used by popovers/dropdowns to attach Radix trigger props to a custom element.
export default {
  title: "Misc/TriggerWrapper",
  component: TriggerWrapper,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="p-4">
      <TriggerWrapper
        renderTrigger={(triggerProps) => (
          <ButtonComponent {...triggerProps} label="Custom trigger" type="outlined" />
        )}
      />
    </div>
  ),
};

export const Default = {};
