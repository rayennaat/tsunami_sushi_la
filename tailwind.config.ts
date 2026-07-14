import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11100e",
        nori: "#17201b",
        rice: "#fff8ec",
        wasabi: "#9cac5f",
        ginger: "#f5b6a6",
        tuna: "#d7443e",
        soy: "#31251f"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 16, 14, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
