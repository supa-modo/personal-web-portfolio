// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowgreen: "rgb(154, 205, 50)",
      },
      animation: {
        spinCustom: "spinCustom 0.8s linear infinite",
      },
      keyframes: {
        spinCustom: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
