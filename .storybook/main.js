module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-viewport/register",
    {
      name: "@storybook/addon-docs/react/preset",
      options: {
        configureJSX: true,
      },
    },
  ],
};
