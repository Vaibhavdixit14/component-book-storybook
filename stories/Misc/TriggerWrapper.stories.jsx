import { TriggerWrapper, PopoverComponent, PopoverActionButton } from "component-book";

// Low-level helper: forwards a ref + props into a render-prop trigger so a custom
// element can act as a Radix trigger. Here it supplies a custom trigger to a
// Popover — clicking it opens the menu, proving the forwarded props are wired.
export default {
  title: "Misc/TriggerWrapper",
  component: TriggerWrapper,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="p-16">
      <PopoverComponent
        renderTrigger={(triggerProps) => (
          <TriggerWrapper
            {...triggerProps}
            renderTrigger={(p) => (
              <button
                {...p}
                className="rounded-2xl border border-white/15 px-3 py-1.5 text-sm text-white hover:bg-white/5"
              >
                Custom trigger
              </button>
            )}
          />
        )}
      >
        <div className="w-44 p-1">
          <PopoverActionButton label="Edit" onClick={() => {}} />
          <PopoverActionButton label="Delete" danger onClick={() => {}} />
        </div>
      </PopoverComponent>
    </div>
  ),
};

export const Default = {};
