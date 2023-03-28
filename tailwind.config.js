/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1210px" },
      // => @media (max-width: 1023px) { ... }
      xlg: { max: "865px" },
      md: { max: "785px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "670px" },
      // => @media (max-width: 670px) { ... }

      smm: { max: "530px" },

      ssm: { max: "360px" },
      // => @media (max-width: 360px) { ... }
    },
  },
  plugins: [],
};
