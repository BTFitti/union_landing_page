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
        custom4: "#4333C2",
        custom5: "#121119",
        custom6: "#292046"
      },
      backgroundImage: {
        heroImg: "url('/hero-desktop-v2.jpg')",
        myGradient:
          "linear-gradient(225deg, rgba(0, 72, 254, 0.1) 0%, rgba(133, 29, 134, 0.1) 100%);",
        pipe: "linear-gradient(320deg, rgb(31, 29, 43) 0%, rgba(31, 29, 43, 0) 100%);",
        test: "linear-gradient(75deg, rgb(0, 72, 254) 0%, rgb(133, 29, 134) 100%);",
        test2:
          "linear-gradient(75deg, rgb(0, 72, 254) -55%, rgb(133, 29, 134) 100%);",
        test3: "linear-gradient(225deg, rgba(0, 72, 254, 0.2) 0%, rgba(133, 29, 134, 0.2) 100%);",
        teste4: "linear-gradient(225deg, rgba(0, 72, 254, 0.2) 10%, rgba(133, 29, 134, 0.2) 50%)"
      },
      boxShadow: {
        "custom-shadow": "rgba(133, 29, 134, 0.4) 0px 0px 30px 0px",
        "custom-shadow2": "rgba(0, 72, 254, 0.4) 0px 0px 30px 0px;",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
      backgroundColor:{
        testecor: "linear-gradient(75deg, rgb(0, 72, 254) -55%, rgb(133, 29, 134) 100%);",
        testecor2: "linear-gradient(75deg, rgb(0, 72, 254) 0%, rgb(133, 29, 134) 100%);"
      }
    },
  },
  plugins: [],
} satisfies Config;
