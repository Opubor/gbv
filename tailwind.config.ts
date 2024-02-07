import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // themeColor: "#f40000",
        themeColor: "#6f2dbd",
        // lightThemeColor: "#f4998d",
        lightThemeColor: "#c19ee0",
        pageBackground: "#f4f4f6",
        darkTheme: "#360568",
      },
    },
  },
  plugins: [],
};
export default config;
