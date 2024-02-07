import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lblue: 'rgb(69,123,157)',
        nearwhite:'rgb(241,250,238)'
      }, spacing: {
        '30': '7rem',  // This adds a 'mt-30' class with a value of 7rem
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif'] // Add Comfortaa to the sans font family
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
