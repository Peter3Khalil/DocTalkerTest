// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindAttributes: ["className"],
  tailwindFunctions: ["clsx"],
  semi: false,
};
