import { useState } from "react";
import { TabComponent, LabelComponent } from "component-book";

export default {
  title: "Inputs/TabComponent",
  component: TabComponent,
  tags: ["autodocs"],
  parameters: { controls: { disable: true } },
  render: () => {
    const tabs = ["Overview", "Usage", "Settings"];
    const [active, setActive] = useState("Overview");
    return (
      <div className="p-4">
        <TabComponent>
          {tabs.map((tab) => (
            <LabelComponent key={tab} active={active === tab} onClick={() => setActive(tab)}>
              {tab}
            </LabelComponent>
          ))}
        </TabComponent>
      </div>
    );
  },
};

export const Default = {};
