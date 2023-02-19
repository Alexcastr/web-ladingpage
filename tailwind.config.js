/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#82AAE3",
          secondary: "#91D8E4",
          accent: "#BFEAF5",
          neutral: "#EAFDFC",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#111827",
          secondary: "#282a36",
          accent: "#1f2437",
          neutral: "#EAFDFC",
        },
      },
    ],
  },
  theme: {
    extend: {},

    keyframes: {
      pulse: {
        "50%": { opacity: 0.2 },
      },
    },
  },
  plugins: [require("daisyui")],
};
