/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "#F2F8FF",
          10: "#D5EAFF",
          70: "#336699",
          90: "#133455",
        },
        neutral: {
          70: "#495057",
          80: "#343A40",
          90: "#212529",
          800: "#424242",
          900: "#212121",
        },
        warning: {
          10: "#FFF4E6"
        },
        appBg: "#FAFAFA"
      }
    },
  },
  plugins: [],
}

