/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // background Image
      backgroundImage: (theme) => ({
        main: "url('/src/assets/profile.jpg')",
      }),
    },
  },
  plugins: [],
  important: true,
};
