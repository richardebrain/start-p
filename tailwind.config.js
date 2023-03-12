/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-green-color": "#44ce6f",
        "black-color": "#0e314c",
        "navlink-color": "#4a6f8a",
        "paragraph-color": "#6084a4",
        "purple-color": "#c679e3",
        "bg-color": "#f7fafd",
        "bg-color2": "#f9f6f6",
        "hosting-main-color": " #032b8d",
      },
      animation: {
        "drop-down": "drop-down 0.3s ease-in-out",
        rotateme: "rotateme 20s linear infinite",
        rotate3d: "rotate3d 4s linear infinite",
        animationFramesOne: "animationFramesOne 15s linear infinite",
        moveleftbounce: "moveleftbounce 4s ease-in-out infinite",
        movebounce: "movebounce 5s ease-in-out infinite",
        movebg: " movebg 5s linear infinite",
        MOVEBG: "MOVEBG 3s linear infinite",
      },
      keyframes: {
        "drop-down": {
          "0%": { transform: "-translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        rotateme: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: " rotate(360deg)",
          },
        },
        rotate3d: {
          "0%": {
            "-webkit-transform": "rotateY(0deg)",
            transform: "rotateY(0deg)",
          },
          "100%": {
            "-webkit-transform": "rotateY(360deg)",
            transform: "rotateY(360deg)",
          },
        },
        animationFramesOne: {
          "0%": {
            "-webkit-transform": "translate(0px,0px) rotate(0deg)",
          },
          "20%": {
            "-webkit-transform": "translate(73px,-1px) rotate(36deg)",
          },
          "40%": {
            " -webkit-transform": "translate(141px,72px) rotate(72deg)",
          },
          "60%": {
            "  -webkit-transform": "translate(83px,122px) rotate(108deg)",
          },
          "80%": {
            " -webkit-transform": "translate(-40px,72px) rotate(144deg)",
          },
          "100%": {
            " -webkit-transform": "translate(0px,0px) rotate(0deg)",
          },
        },
        moveleftbounce: {
          " 0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        movebounce: {
          "0% ": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        movebg: {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
          MOVEBG: {
            "0%": {
              transform: "translateX(0px)",
              "-webkit-transform": "translateX(0px)",
            },
            "100%": {
              transform: "translateX(88px)",
              "-webkit-transform": "translateX(88px)",
           
          },
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1350px",
      },
    },
  },
  plugins: [],
};
