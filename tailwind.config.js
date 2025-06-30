/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5227FF",
        accent: "#7CFF67",
      },
      boxShadow: {
        'glow-xs': '0 0 8px rgba(255, 255, 255, 0.15)',
        'glow-sm': '0 0 15px rgba(82, 39, 255, 0.4)',
        'glow-md': '0 0 20px rgba(82, 39, 255, 0.5)',
        'glow-lg': '0 0 30px rgba(82, 39, 255, 0.6)',
      },
   
    },
  },
  plugins: [],
}

