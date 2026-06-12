/**
 * Minimal Next.js config for the Storybook host.
 *
 * `transpilePackages` is the key line: component-book ships raw JSX (and a few
 * .js files that contain JSX), so Next must compile it from node_modules — the
 * same mechanism zn-dashboard-website uses. @storybook/nextjs reads this config
 * automatically, so the Storybook canvas transpiles the library identically.
 */
module.exports = {
  transpilePackages: ["component-book"],
};
