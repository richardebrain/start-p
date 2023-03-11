/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green-color": "#44ce6f",
        "black-color": "#0e314c",
        "navlink-color": "#4a6f8a",
        "paragraph-color": "#6084a4",
        "purple-color": "#c679e3",
        "bg-color": "#f7fafd",
        "bg-color2": "#f9f6f6",
        "hosting-main-color": " #032b8d",
        // $gradient-color: linear-gradient(135deg, #23bdb8 0%, #43e794 100%);
        // $gradient-color2: linear-gradient(to right bottom, #1fa2ff, #00c0ff, #00d9f2, #53eedd, #a6ffcb);
      },
    },
    screens:{
      "sm":"576px",
      "md":"768px",
      "lg":"992px",
      "xl":"1200px",
      "2xl":"1350px",

    }
  },
  plugins: [],
};
