import { useState } from "react";
import { ToogleSwitch, ToogleSwitchItem } from "component-book";
import { icons } from "../_shared/fixtures.jsx";

export default {
  title: "Inputs/ToogleSwitch",
  component: ToogleSwitch,
  subcomponents: { ToogleSwitchItem },
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => {
    const items = [
      { key: "grid", label: "Grid", Icon: icons.Settings },
      { key: "list", label: "List", Icon: icons.Search },
    ];
    const [active, setActive] = useState("grid");
    return (
      <div className="p-4">
        <ToogleSwitch>
          {items.map((item) => (
            <ToogleSwitchItem
              key={item.key}
              label={item.label}
              Icon={item.Icon}
              state={active === item.key ? "active" : "default"}
              onClick={() => setActive(item.key)}
            />
          ))}
        </ToogleSwitch>
      </div>
    );
  },
};

export const Default = {};
