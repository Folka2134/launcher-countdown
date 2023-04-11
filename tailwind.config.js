/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-hill": "url('/src/assets/images/pattern-hills.svg')",
        "pattern-stars": "url('/src/assets/images/bg-stars.svg')",
      },
      fontFamily: {
        "red-hat": ['"Red Hat Text"'],
      },
    },
  },
  plugins: [],
};
