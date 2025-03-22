/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#08AB78",
        primary2: "#197759",
        secondary: "#6a5b3c",
        accent: "#a89e65",
        light: "#2c2c2c",
        dark: "#111",
        dark2: "#000",
        background: "#1e1e1e",
        background2: "#000",
        text: "#fff",
        danger: "#da5151",
        gray: "#9e9e9e",
      },
    },
  },
  plugins: [],
};
