import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom1: "#0048fe",
        custom2: "#851d86",
        custom3: "#1F1D2B",
        custom4: "#4333C2"
      },
      backgroundImage:{
        heroImg: "url('/hero-desktop-v2.jpg')",
        myGradient: "linear-gradient(225deg, rgba(0, 72, 254, 0.1) 0%, rgba(133, 29, 134, 0.1) 100%);"
      },
    },
  },
  plugins: [],
} satisfies Config;
