/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,cjs}"],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ['"Gmarket Sans TTF"', 'sans-serif'],
        pretendard: ['"Pretendard Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

