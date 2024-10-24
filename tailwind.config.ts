import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1cbad3",
        secondary: "#F2AE24",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
    patterns:{
      colors: {
        yellow: "#F2AE24",
      }
    }
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
    require('tailwindcss-filters')
  ],
};
export default config;
