import type { Config } from "tailwindcss";
console.log("Tailwind config loaded");
const config: Config = {
  darkMode: 'class', // REQUIRED for next-themes
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
 theme: {
    extend: {
      colors: {
        // testRed: '#ff0000',
      },
    },
  },
  plugins: [],
};
export default config;
