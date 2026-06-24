# component-book — Components reference

**Managed by the `component-book` package.** On every `npm install component-book`, `postinstall` copies this file to the **consumer project root** and overwrites any existing copy. Do not edit `COMPONENT_BOOK.md` in consumer repos (e.g. the dashboard) — change props, components, and docs in the [component-book](https://github.com/zujonow/component-book) repo; the next install regenerates this file.

Dashboard-only components (not in this package) are documented in `Components.md` in the dashboard repo.

**Release workflow:** edit components in component-book → tag + push → dashboard bumps `package.json` tag → `npm install`. See `docs/RELEASE.md` in the component-book repo.

- **Package:** `github:zujonow/component-book` — pin a release tag in your app's **`package.json`** (`dependencies.component-book`), then `npm install`.
- **Skip auto-copy:** `COMPONENT_BOOK_SKIP_POSTINSTALL=1 npm install component-book`

## Quick start

```bash
# Pin the tag in package.json, e.g. "component-book": "github:zujonow/component-book#<tag>"
npm install
```

```tsx
// app/layout.tsx
import "component-book/styles";
import "component-book/styles/runtime-overrides";
import { ComponentBookProvider } from "component-book";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ComponentBookProvider theme={{ brand: "videosdk" }}>
          {children}
        </ComponentBookProvider>
      </body>
    </html>
  );
}
```

**Brands:** `theme={{ brand: "videosdk" }}` (purple, rounded) or `theme={{ brand: "zeroruntime" }}` (blue, square corners). See `docs/THEMING.md` in the package.

```tsx
import { ButtonComponent, InputComponent, toastMessage } from "component-book";
```

## Exported components (48)

ActionConfirmModal, AvatarComponent, ButtonComponent, CheckboxGroupComponent, Chip, Copy, DatePickerDemo, DeprecationNotice, Dropdown, DropdownButton, FilterCalendar, FilterCheckbox, FilterComponent, FilterDateRange, FilterInput, FilterRadio, FilterSelect, FilterValueDropdown, FormLabelComponent, HeaderDetaills, IconButtonComponent, InputComponent, JsonEditor, LabelComponent, ModalComponent, NewBadgeComponent, NoData, Notification, PhoneInput, PlayerComponent, PopoverActionButton, PopoverComponent, RadioGroupCards, RadioGroupComponent, RangeSliderComponent, SectionHeader, SelectCheckbox, SelectComponent, SideBarComponent, SwitchComponent, TabComponent, TagChip, ToogleSwitch, ToogleSwitchItem, ToolTipComponent, TriggerWrapper, VideoPlayer, toastMessage, MainTableContainer, NoDataTable, Table, TableBody, TableFooter, TableHeader, TableRow, SidebarContext, Link, ComponentBookProvider, useComponentBook, theme utilities.

---

## Components/v1 reference

Import from `component-book` (not dashboard `@/components/v1` paths below).

### ActionConfirmModal

File: `components/v1/ActionConfirmModal.jsx`
Props:

- `open` (boolean): Controls visibility.
- `setOpen` (function): Called to close the modal (`false`).
- `onConfirm` (function | undefined): Invoked after the modal closes; may be async.
- `onCancel` (function | undefined): Invoked on cancel/close before `setOpen(false)`.
- `title` (string): Default `"Are you sure you want to delete this ?"`.
- `message` (string): Default `"Killing this may affect the people in the meeting"`. Rendered as modal subtitle.
- `confirmText` (string): Default `"Delete"`.
- `cancelText` (string): Default `"Cancel"`. If falsy, secondary action is omitted.
- `confirmClassName` (string | undefined): Passed to primary action `className` (when supported by `ModalComponent`).
- `confirmButtonType` (string): Default `"destructive"`. Primary button `type`.
- `cancelButtonType` (string): Default `"secondary"`. Secondary button `type`.
  Notes: Thin wrapper around `ModalComponent` with `showSeparator={false}`.
  State: none.

### AvatarComponent

File: `components/v1/AvatarComponent.jsx`
Props:

- `src` (string | undefined): Image URL. If missing, shows initial from `name`.
- `name` (string | undefined): Used for initials and `alt`.
- `size` ("small" | "default" | "large" | "medLarge" | "extraLarge"): Default `default`.
- `type` ("round" | "square"): Default `round`. Square uses size-specific radius.
- `displayType` ("primary" | "secondary"): Default `primary`.
- `showHoverIcon` (boolean): Default `false`, shows pencil overlay on hover.
- `onClick` (function | undefined): If present, cursor becomes pointer.
- `className` (string | undefined).
  State: none.

### ButtonComponent

File: `components/v1/ButtonComponent.jsx`
Props:

- `type` ("primary" | "secondary" | "destructive" | "text" | "outlined" | "outlined-destructive" | "link"): Default `primary`.
- `size` ("xs" | "small" | "default" | "large"): Default `default`.
- `label` (string | node): Button text.
- `unstyled` (boolean): Default `false`. Skips type styling.
- `loadingLabel` (string): Default `"Loading..."`.
- `isLoading` (boolean): Default `false`. Disables button, swaps label/spinner, and **also disables all hover effects**.
- `disabled` (boolean): Default `false`. When `true`, the button is non-interactive and **does not show any hover effects**.
- `onClick` (function | undefined).
- `LeftIcon` / `RightIcon` (React component | undefined).
- `BtnIcon` (React component | undefined): Used when `isIconButton` is true.
- `link` (string | undefined): Only used when `type="link"`.
- `isIconButton` (boolean): Default `false`.
- `className` (string | undefined).
- `IconClassName` (string | undefined): Additional classes for the icon.
  State: none.

### CheckboxGroupComponent

File: `components/v1/CheckboxGroupComponent.jsx`

One component for both **single** and **group** checkboxes — same checkbox UI; only `dataArr` length and how you read `values` / `onChange` differ.

**Single checkbox** — one option in `dataArr`; treat checked state as `values.includes(value)`:

```jsx
<CheckboxGroupComponent
  dataArr={[{ name: "Loop audio", value: "loop" }]}
  values={enabled ? ["loop"] : []}
  onChange={(vals) => setEnabled(vals.includes("loop"))}
/>
```

**Checkbox group (multi-select)** — multiple options; `values` holds every selected `value`; `onChange` receives the full updated array:

```jsx
<CheckboxGroupComponent
  name="Enabled Modes"
  dataArr={[
    { name: "Mode A", value: "a" },
    { name: "Mode B", value: "b" },
  ]}
  values={selectedModes}
  onChange={setSelectedModes}
  optionClass="flex-col"
/>
```

Props:

- `dataArr` (array): Options to render. Each item:
  - `value` (string, required): Unique id used in `values` / `onChange`.
  - `name` (string | React node, required): Label beside the checkbox. Strings use default `<p>` label styles; non-string nodes render in a flex label wrapper (for custom row content).
  - `disabled` (boolean, optional): Disables only this option (greyed out, not clickable). Combined with group-level `disabled`.
  - `optionClass` (string, optional): Extra classes on the option row wrapper. Default row layout is `flex-row justify-start`. Example: card row with `flex-row-reverse` for checkbox-on-the-right layouts.
- `values` (array): Selected `value` strings. Default `[]`.
- `onChange` (function): `(newValues: string[]) => void` — toggles the clicked option in/out of the array.
- `name` (string | undefined): Optional group heading above the list.
- `containerClass` (string): Default `""`. Wrapper around the whole group.
- `isInfo` (boolean): Default `false`. When `name` is a string, uses muted info label styles (`text-new-neutral-400`, `text-new-sm`).
- `optionClass` (string): Default `""`. Classes on the flex container that wraps all options (e.g. `flex-col gap-2` for a vertical stack).
- `disabled` (boolean): Default `false`. Disables every option in the group.

Notes:

- Backward compatible: existing callers only need `value` + string `name`; optional `disabled` / `optionClass` on items are additive.
- Do not add a separate single-checkbox v1 primitive unless you need a boolean `checked` / `onChange` API; one-item `dataArr` is the standard pattern in this repo.

State: none.

### Chip

File: `components/v1/Chip.jsx`
Props:

- `label` (string | node).
- `LeftIcon` (React component | undefined).
- `selectedLabel` (string | node | null): Default `null`. Shows active state.
- `onCancel` (function | undefined): Triggered on X icon click.
- `onClick` (function | undefined): Triggered on main area click.
- `showCancel` (boolean): Default `true`.
  State: none.

### Copy

File: `components/v1/Copy.jsx`
Props:

- `value` (string): Text to be copied to clipboard. Default `""`.
- `className` (string | undefined).
  State:
- `copied` (boolean): Toggles between `true` and `false` for 2 seconds after copying.
- `open` (boolean): Controls the tooltip visibility.

### DatePickerDemo

File: `components/v1/DatePickerDemo.jsx`
Props:

- `date` (Date | null).
- `onDateChange` (function).
- `TriggerButton` (React component): Default `InputComponent` if omitted.
- `open` (boolean).
- `setOpen` (function).
- `placeholder` (string): Default `"Select date"`.
- `dateFormat` (string): Default `"dd/MM/yyyy"`.
- `toDate` / `fromDate` (Date | undefined).
- `disabled` (boolean | function | undefined).
- `mode` (string): Default `"single"`.
- `showOutsideDays` (boolean): Default `true`.
- `triggerClassName` (string | undefined).
- `showClear` (boolean): Default `false`.
- `onClear` (function | undefined).
  State: none (controlled).

### DeprecationNotice

File: `components/v1/DeprecationNotice.jsx`
Props:

- `className` (string): Default `""`. Appended to outer wrapper.
  Notes: Renders a warning `Notification` banner for legacy “Manage Existing” surfaces (no CTA).
  State: none.

### DropDownComponent (Dropdown)

File: `components/v1/DropDownComponent.jsx`
Export: named `Dropdown` from `DropDownComponent.jsx`.
Props:

- `open` (boolean).
- `setOpen` (function).
- `trigger` (node).
- `items` (array). Each item `{ id, label, value?, badge?, disabled?, icon?, subItems?, subLeftIndicator?, subSelectionMode? }`. `icon` is a Lucide component type, not JSX.
- `leftIndicator` ("checkbox" | "radio" | "tick" | "none" | "icon"): Default `"none"`. When an item has `icon`, that row uses icon mode with a selection dot.
- `selectionMode` ("single" | "multi"): Default `"single"`.
- `searchable` (boolean): Default `false`.
- `maxHeight` (string): Default `"240px"`.
- `onSelect` (function): `(item) => void`.
- `selectedIds` (array | Set | undefined): Controlled selection. If omitted, uses internal set.
- `align` ("start" | "center" | "end"): Default `"start"`.
- `side` ("top" | "right" | "bottom" | "left" | undefined).
- `sideOffset` (number): Default `6`.
- `triggerClassName` / `contentClassName` / `leftIndicatorClassName` / `menuItemClassName` (string | undefined).
- `triggerOnOpenChange` (function | undefined): `(isOpen) => void`, fires when menu opens/closes.
- `header` (node | undefined): Content above the item list.
- `footer` (node | undefined): Content below the item list.
- `showArrow` (boolean): Default `false`. When `true`, renders a Radix `DropdownMenu.Arrow` (tooltip-style layered border + fill) and uses `overflow-visible` on the panel so the caret is not clipped. Opt-in only — existing menus are unchanged unless this prop is set.
- `arrowFillClassName` (string): Default `"fill-new-neutral-900"`. Inner arrow fill (Tailwind class).
- `arrowBorderClassName` (string): Default `"fill-new-neutral-800"`. Outer arrow stroke/border (Tailwind class).
  Notes: For custom panels (e.g. feedback form), pass `items={[]}` and put the form in `header` / `footer`; hide the empty item list with `contentClassName` such as `[&>div.overflow-y-auto]:hidden`. Pair `showArrow` with `side` / `align` / `sideOffset` so the caret points at the trigger (e.g. `side="bottom"`, `align="end"`).
  State:
- `internalSelected` (Set), `query` (string), `hoveredItemId` (string | number | null).

### DropdownButton

File: `components/v1/DropdownButton.jsx`
Props:

- `label` (string): Button label.
- `buttonType` (ButtonComponent `type`): Default `"secondary"`.
- `buttonSize` (ButtonComponent `size`): Default `"default"`.
- `align` ("start" | "center" | "end"): Default `"end"`. Passed to `Dropdown`.
- `className` (string | undefined): Button wrapper class.
- `options` (array): Default `[]`. Each option `{ id?, label, color?, icon?, disabled?, onClick? }`. `onClick` runs when the option is selected.
  Notes: Composes `ButtonComponent` + `Dropdown` with internal open state.
  State:
- `open` (boolean).

### FilterCalendar

File: `components/v1/FilterCalendar.jsx`
Props:

- `value` (Date | null).
- `onApply` / `onCancel` (function).
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` (string | undefined).
- `leftIcon` (React component): Default `Plus`.
- `selectedLabel` (string | undefined).
- `toDate` / `fromDate` / `disabled` (Date/function | undefined).
- `dateFormat` (string): Default `"MMM dd, yyyy"`.
- `placeholder` (string): Default `"Today or past dates"`.
- `disableFutureDates` (boolean): Default `true`.
- `showClear` (boolean): Default `false`.
  State:
- `selectedDate`, `open`, `isCalendarOpen`.

### FilterDateRange

File: `components/v1/FilterDateRange.jsx`
Props:

- `startDate` / `endDate` (Date | number | string | undefined): Applied range. Coerced with `new Date(+value)` when open.
- `onApply` (function | undefined): `( { startDate, endDate } ) => void` with stringified ms timestamps.
- `onCancel` (function | undefined): Chip cancel handler.
- `label` (string): Default `"Date range"`.
- `TriggerComponent` (React component): Chip trigger; receives `label`, `state`, `LeftIcon`, `selectedLabel`, `onClick`, `onCancel`, `ref`, etc.
- `chipState` (string | undefined).
- `leftIcon` (React component): Default `Plus`.
- `selectedLabel` (string | node | undefined): Overrides auto-formatted range label on the chip.
- `disableFutureDates` (boolean): Default `true`.
- `disablePastDates` (boolean): Default `false`.
- `includeTime` (boolean): Default `false`. Shows start/end time inputs for range mode.
- `mode` ("range" | "single"): Default `"range"`. Single mode applies same ms for start and end.
  State:
- `open`, `range`, `singleDay`, `startTime`, `endTime`.

### FilterCheckbox

File: `components/v1/FilterCheckbox.jsx`
Props:

- `options` (array): Array of objects with `value` and `label`.
- `value` (array): Array of selected values.
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` (string | undefined).
- `leftIcon` / `selectedLabel` (node | undefined).
- `onApply` / `onCancel` (function).
- `hasActiveFilters` (boolean | undefined).
- `onClearAllFilters` (function | undefined).
  State:
- `selectedOptions`, `open`.

### FilterComponent

File: `components/v1/FilterComponent.jsx`
Export: `FilterComponent` (popover filter using `SelectComponent` in the panel).
Props:

- `options` (array): `{ value, label, placeholder? }` for `SelectComponent`.
- `value` (any): Selected value.
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onApply` (function): `(selectedValue) => void`.
- `onCancel` (function | undefined).
  State:
- `selectedOption`, `open`.

### FilterRadio

File: `components/v1/FilterRadio.jsx`
Props:

- `options` (array): `{ value, label }`.
- `value` (string): Default `""`. Selected value.
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onApply` (function): `(selectedValue) => void`.
- `onCancel` (function | undefined).
  State:
- `selectedOption`, `open`.

### FilterSelect

File: `components/v1/FilterSelect.jsx`
Export: `FilterSelect` (checklist UI in the panel).
Props:

- `options` (array): `{ value, label }`.
- `value` (any): Default `""`.
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onApply` (function): `(selectedValue) => void`.
- `onCancel` (function | undefined).
  Notes: Same filter-chip pattern as `FilterComponent`, but uses a custom checklist UI (Check icons) instead of `SelectComponent`.
  State:
- `selectedOption`, `open`.

### FilterInput

File: `components/v1/FilterInput.jsx`
Props:

- `value` (string).
- `label` (string).
- `placeholder` (string): Default `"Enter value"`.
- `TriggerComponent` (React component).
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onApply` / `onCancel` (function).
  State:
- `inputValue`, `open`.

### FilterValueDropdown

File: `components/v1/FilterValueDropdown.jsx`
Props:

- `values` (array): Selected values. Default `[]`.
- `defaultValuesOnOpen` (array): Default `[]`. Applied to temp selection when opening with empty `values`.
- `onChange` (function): `(nextValues: array) => void`.
- `items` (array): `{ id?, value, label }`.
- `placeholder` (string): Default `"Select"`. Inline trigger only.
- `label` (string | undefined): Filter header label when using chip trigger.
- `TriggerComponent` (React component | undefined): If set, chip + Apply footer pattern; if omitted, inline select-style trigger.
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onCancel` (function | undefined): Chip cancel.
- `hasActiveFilters` (boolean | undefined).
- `onClearAllFilters` (function | undefined): Shows “Clear filter” link when `hasActiveFilters`.
- `className` (string | undefined): Wrapper class for inline mode. Default flex-1 behavior when omitted.
- `selectionMode` ("single" | "multi"): Default `"multi"`.
- `leftIndicatorType` ("checkbox" | "radio" | …): Default `"checkbox"`. Passed to `Dropdown` as `leftIndicator`.
- `disallowDeselect` (boolean): Default `false`. Prevents clearing the last selection in single mode.
  State:
- `open`, `tempValues` (chip mode drafts until Apply).

### FormLabelComponent

File: `components/v1/FormLabelComponent.jsx`
Props:

- `label` (string).
- `description` (string | undefined).
- `required` (boolean): Default `false`.
- `size` ("default" | "small"): Default `"default"`.
- `htmlFor` (string | undefined).
- `className` (string | undefined).
- `children` (node | undefined).
- `onClick` (function | undefined).
  State: none.

### HeaderDetaills

File: `components/v1/HeaderDetaills.jsx`
Props:

- `rows` (array): **Array of rows**, each row an array of `{ label, value, valueClassName?, isEmpty? }`. Example: `rows={[[{ label: "Status", value: "Active" }]]}`., each containing items with `{ label, value, valueClassName, isEmpty }`.
  State: none.

### IconButtonComponent

File: `components/v1/IconButtonComponent.jsx`
Props:

- `icon` (React.ElementType): Required.
- `variant` ("primary" | "secondary" | "text" | "outlined" | "action" | "text-destructive" | "outlined-destructive"): Default `"primary"`.
- `size` ("sm" | "md" | "lg"): Default `"md"`.
- `disabled` (boolean): Default `false`.
- `onClick` (function | undefined).
- `className` / `iconClassName` (string | undefined).
  State: none.

### InputComponent

File: `components/v1/InputComponent.jsx`
Props:

- `type` ("text" | "number" | "textarea" | "searchComp" | other input types): Default `text`.
- `value` (string | number).
- `onChange` (function).
- `placeholder` (string): Default `"Text"`.
- `disabled` (boolean): Default `false`.
- `error` (boolean): Adds error styles.
- `message` (string | undefined): Helper or error text.
- `showClear` (boolean): Default `false`, shows clear button when value exists.
- `showCopy` (boolean): Shows copy-to-clipboard button when value exists.
- `label` (string | undefined): Optional label above input.
- `labelClassName` (string | undefined): Additional classes for the label.
- `mandatory` (boolean): Adds `*` to label.
- `maxLength` (number | undefined).
- `prefix` (string | node | undefined): Left prefix inside input.
- `prefixClassName` (string): Default `""`.
- `RightIcon` (React component | undefined): Icon to display on the right.
- `rightIconClassName` (string | undefined).
- `onRightIconClick` (function | undefined).
- `isLoading` (boolean): Default `false`. Disables input and shows spinner.
- `loadingText` (string): Default `"Loading..."`.
- `onFocus` (function | undefined).
- `className` (string | undefined).
- `...props`: Passed to `input`/`textarea`.
  State:
- Clipboard hook state for `showCopy` (internal `copied` flag).

### LabelComponent

File: `components/v1/LabelComponent.jsx`
Props:

- `children` (node).
- `active` (boolean): Default `false`. Active state adds indicator and colors.
- `onClick` (function | undefined): If present, renders as `button`.
- `noBottomMargin` (boolean): Default `false`.
- `className` (string | undefined).
- `...props`: Forwarded to wrapper.
  State: none.

### ModalComponent

File: `components/v1/ModalComponent.jsx`
Props:

- `open` (boolean): Controls visibility.
- `onClose` (function | undefined).
- `title` (string | node).
- `subtitle` (string | node | undefined).
- `children` (node | undefined): Body content.
- `primaryAction` (object | undefined): `{ label, onClick, disabled, isLoading, loadingLabel, type? }`.
- `secondaryAction` (object | undefined): Same shape as `primaryAction`.
- `thirdAction` (object | undefined): Same shape as `primaryAction`, rendered left.
- `className` (string | undefined).
- `showSeparator` (boolean): Default `true`.
- `onOpenAutoFocus` (function | undefined).
- `showBottomSeparator` (boolean): Default `false`.
- `scrollBody` (boolean): Default `false`. Makes body scrollable between header and footer.
- `bottomSection` (node | undefined): Optional content below the action footer.
  Action objects (`primaryAction` / `secondaryAction` / `thirdAction`): `{ label, onClick, disabled?, isLoading?, loadingLabel?, type? }`.
  State: none (uses internal `visible` for exit animation).

### NewBadgeComponent

File: `components/v1/NewBadgeComponent.jsx`
Props:

- `label` (node).
- `className` (string | undefined).
  State: none.

### NoData

File: `components/v1/NoData.jsx`
Props:

- `title` (string | node | undefined): Main title text. Default `"No records found"`.
- `message` (string | node | undefined): Description text. Default `"There is nothing here"`.
- `Icon` (React component | undefined): Icon to display. Default `FolderOpen` (from lucide-react).
- `buttons` (array): Default `[]`. Array of button configuration objects passed to `ButtonComponent`.
  State: none.

### Notification

File: `components/v1/Notification.jsx`
Props:

- `type` ("success" | "neutral" | "info" | "warning" | "error"): Default `"info"`.
- `variant` ("filled" | "outline"): Default `"filled"`.
- `message` (string | undefined).
- `title` (string | undefined).
- `icon` (React component | undefined).
- `onClose` (function | undefined).
- `showClose` (boolean): Default `false`.
- `className` (string | undefined).
- `autoClose` (number | undefined): Timeout in ms.
- `isVisible` (boolean): Default `true`.
  State:
- `show` (boolean).

### PhoneInput (PhoneNumberInputComponent)

File: `components/v1/PhoneNumberInputComponent.jsx`
Props:

- `value` (string | undefined): Phone number in E.164 format.
- `onChange` (function): Receives string (or `""`).
- `label` (string | undefined).
- `error` (boolean).
- `message` (string | undefined).
- `className` (string | undefined).
- `...props`: Passed to `react-phone-number-input`.
  State:
- Country select popover state: `open`, `searchValue`.

### PlayerComponent

File: `components/v1/PlayerComponent.jsx`
Props (controlled/uncontrolled):

- `duration` (number): Default `300`.
- `currentTime` (number | undefined): If omitted, internal state is used.
- `isPlaying` (boolean | undefined): If omitted, internal state is used.
- `onPlayPause` (function | undefined): If omitted, toggles internal state.
- `onSpeedChange` (function | undefined).
- `onSeek` (function | undefined): Called with new time.
- `onSkipForward` / `onSkipBackward` (function | undefined).
- `onVolumeChange` (function | undefined).
  State:
- Internal playback: `internalCurrentTime`, `internalIsPlaying`.
- Volume: `volume`, `previousVolume`, `isMuted`.
- Speed: `speed`.

### PopoverActionButton

File: `components/v1/PopoverActionButton.jsx`
Props:

- `label` (string).
- `onClick` (function).
- `icon` (React component | undefined).
- `danger` (boolean): Default `false`.
- `disabled` (boolean): Default `false`.
- `marginBottomShow` (boolean): Default `true`.
  State: none.

### PopoverComponent

File: `components/v1/PopoverComponent.jsx`
Props:

- `open` (boolean | undefined): Controlled popover.
- `onOpenChange` (function | undefined).
- `buttonType` ("text" | "primary" | "secondary" | "destructive" | "outlined" | "link"): Default `text`.
- `buttonSize` ("small" | "default" | "large"): Default `small`.
- `buttonDisabled` (boolean): Default `false`.
- `buttonIcon` (React component | undefined): Icon-only button.
- `buttonLeftIcon` / `buttonRightIcon` (React component | undefined).
- `buttonLabel` (string | node | undefined).
- `buttonClassName` (string): Default `""`.
- `renderTrigger` (function | undefined): `(triggerProps) => node`. Custom trigger via `TriggerWrapper`; overrides default button.
- `align` ("start" | "center" | "end"): Default `end`.
- `side` ("top" | "right" | "bottom" | "left"): Default `bottom`.
- `sideOffset` (number): Default `4`.
- `contentClassName` (string): Default `""`.
- `childrenClassName` (string | undefined): Wrapper class around `children`.
- `modal` (boolean): Default `true`. Radix popover modal behavior.
- `children` (node): Popover content.
- `...props`: Forwarded to `PopoverContent` (e.g. `onOpenAutoFocus`).
  State: none (controlled by Radix Popover when uncontrolled).

### RadioGroupComponent

File: `components/v1/RadioGroupComponent.jsx`
Props:

- `dataArr` (array): Each item `{ name, value, disabled? }`.
- `value` (string | number): Selected value.
- `onChange` (function): Called with selected value.
- `name` (string | undefined): Optional group label text.
- `infoIcon` (node | undefined): Shown beside `name`.
- `containerClass` (string): Default `""`.
- `radioGridClassname` (string | undefined): Layout classes for the radio list (default `flex flex-col`).
- `nameClassname` (string | undefined): Classes for the label row.
  State: none (uses internal `useId` for unique radio names).

### RangeSliderComponent

File: `components/v1/RangeSliderComponent.jsx`
Props:

- `value` (number): Current value.
- `onChange` (function): Native range input event — use `(e) => setValue(Number(e.target.value))`.
- `name` (string | undefined): Optional label.
- `containerClass` (string): Default `""`.
- `min` (number): Default `1`.
- `max` (number): Default `25`.
- `variant` ("purple" | "grey"): Default `purple`.
- `showContainer` (boolean): Default `false`.
- `leftIcon` (node | null).
- `leftValue` (string | number | null).
- `rightValue` (string | number | null).
- `showRightValue` (boolean): Default `true`.
- `paddingClass` (string): Default `"px-4 py-2"`.
  State: none.

### SectionHeader

File: `components/v1/SectionHeader.jsx`
Props:

- `title` (string | node).
- `description` (string | node | undefined).
- `className` (string): Default `""`.
- `type` ("left" | "center"): Default is effectively `"left"` (current code uses `type = "left" || "center"`).
- `size` ("small" | "large"): Default is effectively `"small"` (current code uses `size = "small" || "large"`).
  State: none.

### SelectCheckbox

File: `components/v1/SelectCheckbox.jsx`
Props:

- `options` (array).
- `value` (any).
- `label` (string).
- `TriggerComponent` (React component).
- `chipState` / `leftIcon` / `selectedLabel` (any).
- `onApply` / `onCancel` (function).
  State:
- `open`.

### SelectComponent

File: `components/v1/SelectComponent.jsx`
Props:

- `options` (array): Default `[]`. Array of `{ value, label, placeholder? }`.
- `value` (any).
- `onChange` (function).
- `placeholder` (string): Default `"Select"`.
- `disabled` (boolean): Default `false`.
- `error` (boolean): Default `false`.
- `message` (string | undefined).
- `className` / `dropdownClassName` (string | undefined).
- `label` (string | undefined).
- `mandatory` (boolean): Default `false`. Adds `*`.
- `align` ("start" | "center" | "end"): Default `"start"`.
- `sideOffset` (number): Default `4`.
- `check` (boolean): Default `false`. Shows Check icon for selected item.
- `searchable` (boolean): Default `false`. Adds a search box to filter options by label.
  State:
- `isOpen`, `isHovered`.

### SideBarComponent

File: `components/v1/SideBarComponent.jsx`
Props:

- `open` (boolean).
- `onOpenChange` (function).
- `headerDivider` (boolean).
- `heading` (string).
- `description` (string | undefined).
- `footer` (function | undefined): Returns React node.
- `children` (node).
  State: none.

### SwitchComponent

File: `components/v1/SwitchComponent.jsx`
Props:

- `enabled` (boolean).
- `onConfirmChange` (function).
- `name` (string | undefined).
- `showEnabled` (boolean): Default `false`.
- `containerClass` / `modalClassName` (string | undefined).
- `confirmOnToggle` (boolean): Default `false`.
- `confirmConfig` (object): Includes `enable` and `disable` configurations for ModalComponent.
- `showSeparator` (boolean): Default `true`.
  State:
- `open`, `pendingValue`.

### TabComponent

File: `components/v1/TabComponent.jsx`
Props:

- `children` (node): Typically multiple `LabelComponent` children.
  Behavior:
- Clones `LabelComponent` children and sets `noBottomMargin` to `true`.
  State: none.

### TagChip

File: `components/v1/TagChip.jsx`
Props:

- `label` (node).
- `onRemove` (function | undefined).
- `removable` (boolean): Default `false`.
- `className` (string | undefined).
  State: none.

### ToogleSwitch

File: `components/v1/ToogleSwitch.jsx`
Props:

- `children` (node).
- `containerclass` (string | undefined).
  State: none.

### ToogleSwitchItem

File: `components/v1/ToogleSwitchItem.jsx`
Props:

- `state` ("default" | "active"): Default `"default"`.
- `Icon` (React component | undefined).
- `label` (string).
- `onClick` (function).
  State: none.

### ToolTipComponent

File: `components/v1/ToolTipComponent.jsx`
Props:

- `children` (node): Trigger.
- `heading` (string | node | undefined).
- `content` (string | node | undefined).
- `side` ("top" | "right" | "bottom" | "left"): Default `top`.
- `className` (string | undefined).
- `contentClassName` (string | undefined).
- `...props`: Passed to Radix Tooltip.
  Notes: `TooltipContent` renders a layered Radix `Arrow` (border + fill). The same pattern is available on `Dropdown` via `showArrow` (opt-in).
  State: none.

### TriggerWrapper

File: `components/v1/TriggerWrapper.jsx`
Props:

- `renderTrigger` (function).
- `...triggerProps`: Rest.
  State: none.

### VideoPlayer

File: `components/v1/VideoPlayer.jsx`
Props:

- `src` (string).
- `className` (string | undefined).
- `onError` / `onLoadedData` / `onCanPlay` (function | undefined).
- `minHeight` (string): Default `"300px"`.
- `...props` (passed to `<video>`).
  State:
- `isPlaying`, `currentTime`, `duration`, `playbackRate`, `isFullscreen`, `hlsError`, `volume`, `isMuted`.

### toastMessage (utility)

File: `components/v1/toast.js`
Function signature:

- `toastMessage({ message, type, title, icon, className, iconClassName, descClassName, showXIcon })`
  Notes:
- `type` is one of `success | error | warning`.
- Default toast config is applied when `title` or `icon` is not provided.
  State: none (delegates to `react-toastify`).


## TableV1 (components/v1/TableV1)

### MainTableContainer

File: `components/v1/TableV1/MainTableContainer.jsx`
Props:

- `children` (node).
- `extraClasses` (string | undefined).
- `isFooter` (boolean): Default `true`.
- `heightOffset` (number): Default `0`.
  Notes:
- Uses `SidebarContext` to adjust height based on announcements.
  State: none.

### Table

File: `components/v1/TableV1/Table.js`
Props:

- `children` (node).
- `height` (string | number | undefined): Inline `height`.
- `isFooter` (boolean): Default `true`.
  State: none.

### TableHeader

File: `components/v1/TableV1/TableHeader.js`
Props:

- `columns` (array): Items can be strings or objects.
  Object shape:
- `title` (string | node).
- `icon` (node | undefined).
- `onClick` (function | undefined).
- `className` (string | undefined).
- `style` (object | undefined): Supports `textAlign`.
- `showZIndex` (boolean): Default `true`.
  State: none.

### TableBody

File: `components/v1/TableV1/TableBody.js`
Props:

- `children` (node).
- `isLoading` (boolean | undefined): Adds opacity.
- `noDivider` (boolean): Default `false`.
  State: none.

### TableRow

File: `components/v1/TableV1/TableRow.js`
Props:

- `columns` (array): Each item is an object with:
- `text` (string | node).
- `preActions` (array of components | undefined).
- `actions` (array of components | undefined).
- `textHref` (string | undefined).
- `hrefTarget` (string | undefined).
- `onTextClick` (function | undefined).
- `center` (boolean | undefined).
- `right` (boolean | undefined).
- `textMono` (boolean | undefined).
- `verticalAlign` (boolean | undefined).
- `renderToolTip` (boolean | undefined).
- `tooltipText` (string | node | undefined).
- `audioPlayAction` (array of render fns | undefined).
- `className` (string | undefined).
- `style` (object | undefined).
- `onClick` (function | undefined): Row click.
- `onMouseEnterAction` / `onMouseLeaveAction` (function | undefined).
  State:
- `mouseOver` (boolean): Drives hover styles and text underline.

### TableFooter

File: `components/v1/TableV1/TableFooter.js`
Props:

- `isLoading` (boolean).
- `response` (object): Expects `response.pageInfo.total` and `response.pageInfo.perPage`.
- `state` (object): Uses `state.page` for current page.
- `perPageRef` (ref): Wrapper ref for dropdown.
- `perPageDropdownOpen` (boolean).
- `setPerPageDropdownOpen` (function).
- `dispatch` (function).
- `actions` (object): `{ pageChange, perPageChange }` action type strings.
  State: none (dropdown state is controlled by parent).

### NoDataTable

File: `components/v1/TableV1/NoDataTable.js`
Props:

- `columns` (array): Passed to `TableHeader`.
- `message` (string | node | undefined).
  State: none.

