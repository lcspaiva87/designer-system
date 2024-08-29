import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kumbh: ['var(--font-sans)', 'Kumbh Sans', 'sans-serif'],
      },
      colors: {
        secondary: {
          100: '#F6F6F6',
          200: '#F4F3F8',
          300: '#E0DEEA',
          400: '#ACABB7',
          500: '#8C8A97',
          600: '#716F7A',
          700: '#5F5C6B',
          800: '#4E4B59',
          900: '#33303E',
          DEFAULT: '#8C8A97',
        },
        orage: {
          500: "#F97316",
          600: "#EA580C",
          50: "#FB923C80"
        },
        gray: {
          800: "#1F2937",
          700: "#3741511f",
          600: "#CECECE",
          500: "#6B7280",
          400: "#9CA3AF",
          50: "#FFFFFF"
        },
        secudary: "#E0DEEA",
        defautText: "#54545466",
        textInput: "#5D66708C",
        Default: "#F6F5FA",
  
        green: {
          500: "#22C55E"
        },
        red: {
          500: "#EF4444"
        },
        yellow: {
          500: "#F59E0B"
        },
     
      },
      boxShadow: {
        boxShadowItem: "4px 4px 4px 4px rgba(0, 0, 0, 0.05)",
      }

    },
  },
  plugins: [],
};
export default config;
