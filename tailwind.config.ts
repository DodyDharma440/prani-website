import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'DM Sans', sans-serif",
      },
    },
    colors: {
      primary: "#8dc864",
      secondary: "#285b02",
    },
  },
  plugins: [],
} satisfies Config;
