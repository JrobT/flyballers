// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  tailwindConfig: './web/config/tailwind.config.js',
}
