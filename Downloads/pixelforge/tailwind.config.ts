import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        bg: "#09090B",
        card: "#111113",
        accent: "#6D5EF5",
        "accent-2": "#8B5CF6",
        success: "#10B981",
        danger: "#EF4444",
        muted: "#A1A1AA",
        border: "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 4px 30px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(109,94,245,0.35)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.9)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
