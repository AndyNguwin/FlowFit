/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        navbar: {
          bg: "#749BC2",
          text: "#ffffff",
          outline: "#4682A9",
        },
        content: {
          card: "#DDF2FD",
        },
      }
    },
    darkMode: "class", // Add this line to enable dark mode with the "class" option
    safelist: [],
    plugins: [require("@headlessui/tailwindcss")],
  }
};
