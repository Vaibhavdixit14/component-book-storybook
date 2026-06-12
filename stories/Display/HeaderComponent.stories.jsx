import { HeaderComponent, ButtonComponent, NewBadgeComponent } from "component-book";

export default {
  title: "Display/HeaderComponent",
  component: HeaderComponent,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    showBackButton: { control: "boolean" },
    showBreadcrumbs: { control: "boolean" },
    subHeader: { control: "text" },
    breadcrumbs: { control: "object" },
  },
  args: {
    heading: "Phone numbers",
    showBackButton: false,
    showBreadcrumbs: true,
    subHeader: "Manage the numbers connected to your workspace.",
    breadcrumbs: [
      { label: "Telephony", href: "#" },
      { label: "Phone numbers" },
    ],
  },
  render: (args) => (
    <div className="w-[760px]">
      <HeaderComponent
        {...args}
        rightContent={
          <div className="flex items-center gap-2">
            <NewBadgeComponent label="Beta" />
            <ButtonComponent label="Buy number" type="primary" />
          </div>
        }
      />
    </div>
  ),
};

export const Default = {};
export const WithBackButton = { args: { showBackButton: true } };
export const NoBreadcrumbs = { args: { showBreadcrumbs: false } };
