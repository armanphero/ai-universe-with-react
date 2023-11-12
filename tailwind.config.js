/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#53e262",

          "secondary": "#c769ef",

          "accent": "#0aaa98",

          "neutral": "#22222b",

          "base-100": "#f6f5f9",

          "info": "#83cef1",

          "success": "#30c587",

          "warning": "#fbbc46",

          "error": "#e43a5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

