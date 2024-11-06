/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pfizer-blue' : '#0844a4',
        'light-gray' : '#e8edfa',
        'dark-gray' : '#616365',
        'light-blue' : '#7dbefa',
        'creamish' : '#f9f7f3',
        'ticket-hover' : '#eaedf1',
      },
      fontFamily: {
        notoSans: ['Noto Sans', 'sans'],
      },
    },
  },
  plugins: [],
}

