/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { width: "0" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        expand: "expand 2s cubic-bezier(0, 0, 1, 1)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
