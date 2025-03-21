/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#42D392",
        secondary: "#6088F2",
        accent: "#213547",
        light: "#F8F1F1",
        dark: "#1A1A1A",
        dark2: "#0f0f0f",
      },
    },
  },
  plugins: [],
};
