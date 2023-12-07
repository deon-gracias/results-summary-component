/** @type {import('tailwindcss').Config} */
import defaultConfig from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          red: "hsl(0, 100%, 67%)",
          yellow: "hsl(39, 100%, 56%)",
          teal: "hsl(166, 100%, 37%)",
          blue: "hsl(234, 85%, 45%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          lightblue: "hsl(221, 100%, 96%)",
          lavender: "hsl(241, 100%, 89%)",
          blue: "hsl(224, 30%, 27%)",
        },
        gradient: {
          blue: {
            start: "hsl(252, 100%, 67%)",
            end: "hsl(241, 81%, 54%)",
          },
          violet: {
            start: "hsla(256, 72%, 46%, 1)",
            end: "hsla(241, 72%, 46%, 0)",
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /(bg|text|border|from|to)-(primary|gradient|neutral)-*/ },
  ],
};
