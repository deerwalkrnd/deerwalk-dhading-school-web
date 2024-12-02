import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-from-top': {
          '0%': { top: '0px', opacity: '1' },
          '100%': { top: '60px', opacity: '1' },
        },
        'move-from-bottom': {
          '0%': { top: '60px', opacity: '1' },
          '100%': { top: '-60px', opacity: '1' },
        },
      },
      animation: {
        'move-from-top': 'move-from-top 0.3s ease-in',
        'move-from-bottom': 'move-from-bottom 0.3s ease-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
