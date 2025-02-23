import { Radio_Canada_Big, Space_Grotesk } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Space_Grotesk: "var(--font-spaceG)",
        Radio_Canada_Big: "var(--font-canadaBig)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        colorTextPrimary: "var(--colorTextPrimary)",
        colorTextSecundary: "var(--colorTextSecundary)",

        colorWhite: "var(--colorWhite)",

        bgColorDarkBlue: "var(--bgColorDarkBlue)",
        bgColorGray: "var(--bgColorGray)"
      },
    },
  },
  plugins: [],
};
