import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "599px",
      // => @media (min-width: 640px) { ... }

      md: "904px",
      // => @media (min-width: 768px) { ... }

      lg: "1239px",
      // => @media (min-width: 1024px) { ... }

      xl: "1439px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        red: {
          50: "#FCEEEE",
          100: "#F9DEDC",
          200: "#F2B8B5",
          300: "#EC928E",
          400: "#E46962", // P
          500: "#DC362E",
          600: "#B3261E",
          700: "#8C1D18",
          800: "#601410",
          900: "#410E0B",
        },
        primary: {
          default: "#6099b4",
          50: "#d7f4ff",
          100: "#b7dff1",
          200: "#9ac6dc",
          300: "#79adc6",
          400: "#6099b4", // P
          500: "#4586a3",
          600: "#377791",
          700: "#28637a",
          800: "#1a4f65",
          900: "#033a4d",
        },
        secondary: {
          default: "#73a761",
          50: "#e9f2e7",
          100: "#cadec4",
          200: "#a9c99f",
          300: "#89b57b",
          400: "#73a761",
          500: "#5f9947",
          600: "#558b40",
          700: "#4a7a36",
          800: "#3f692e",
          900: "#2d4b20", // S
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
