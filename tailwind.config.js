const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        terciary: 'var(--terciary)', 
        green: 'var(--green)',
        form: 'var(--form)',
    }
  },
  plugins: [],
});