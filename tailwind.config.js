/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        slide_up: "slide_up 0.5s ease-in-out forwards",
        slide_down: "slide_down 0.25s ease-in-out forwards",
      },
      keyframes: {
        slide_up: {
          "0%": { top: "320px" },
          "100%": { top: "0px" },
        },
        slide_down: {
          "0%": { top: "0px" },
          "100%": { top: "320px" },
        },
      },
    },
  },
  // set daisyui plugin with black theme
  plugins: [
    require("daisyui"),
    {
      daisyui: {
        themes: ["dark"],
      },
    },
  ],
};
