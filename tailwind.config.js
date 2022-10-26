/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    maxWidth: {
      '133vh': '133vh',
      '100%': '100%',
    }
  },
  plugins: [],
}
