import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        secondary: "#808a9e",
        border: "var(--border)",
      },
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-down": "fade-down 1s ease-out forwards", // Add 'forwards' to persist the final state
      },
    },
  },
  plugins: [],
} satisfies Config;
