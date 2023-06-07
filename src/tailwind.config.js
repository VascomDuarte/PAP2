/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing: {
          '500': '500px',
          '530': '530px',
          '600': '600px',
        },
  
      width:{
        '300' : '250px',
      }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  });