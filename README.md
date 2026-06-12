# component-book-storybook

A **Storybook gallery** for the [`component-book`](https://github.com/zujonow/component-book) design system — a designer-facing catalog of every shared component in all of its states, with a live **Controls** panel and a **brand toolbar** (VideoSDK ↔ Zero Runtime).

It is a standalone app (kept out of the `component-book` repo so the library ships no Storybook/build deps). It renders the library exactly like the dashboard does — **Next.js 16 + React 19 + Tailwind v4 + `transpilePackages`** — so what designers see matches production.

## Run locally

```bash
npm install
npm run storybook      # http://localhost:6006
```

Other scripts:

```bash
npm run build-storybook   # static build → storybook-static/
```

## How it's wired

- **`package.json`** depends on the library by release tag: `"component-book": "github:zujonow/component-book#v0.1.12"`.
- **`next.config.js`** — `transpilePackages: ["component-book"]` compiles the library's raw JSX (the same mechanism the dashboard uses).
- **`postcss.config.js`** — Tailwind v4 via `@tailwindcss/postcss`.
- **`.storybook/preview.jsx`** — imports `component-book/styles` + `runtime-overrides`, forces `.dark` on `<html>`, wraps every story in `<ComponentBookProvider>`, and exposes the **Brand** toolbar (`videosdk` / `zeroruntime`).
- **`styles/globals.css`** — a small Tailwind root with `@source "../stories/**"` so utility classes used in story layout wrappers are generated. (Component styling itself comes from `component-book/styles`.)

## Adding a story

When a new component is added to `component-book`, add a story next to its category in `stories/`:

```jsx
import { MyComponent } from "component-book";

export default {
  title: "Category/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  argTypes: { /* from COMPONENT_BOOK.md */ },
  args: { /* sensible defaults */ },
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
```

Prop references live in **`COMPONENT_BOOK.md`** (auto-copied into this repo on install). Keep story-wrapper styling to standard Tailwind utilities; the component's own classes come from the library.

## Developing against unreleased component changes

To preview local, un-tagged edits to the library:

```bash
npm install file:../component-book   # point at the local checkout
# ...iterate, then restore the tag before committing:
npm install github:zujonow/component-book#vX.Y.Z
```

When `component-book` cuts a new release, bump the tag in `package.json` and `npm install`.

