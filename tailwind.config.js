/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#c084fc",
          "secondary": "#a5b4fc",
          "accent": "#818cf8",
          "neutral": "#28222a",
          "base-100": "#e0e7ff",
          "info": "#9cb7f2",
          "success": "#207e72",
          "warning": "#a17a08",
          "error": "#991b1b",
        },
      },
    ],
  },
}

