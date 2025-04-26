/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    "./components/**/*.{js,ts,jsx,tsx}", // Ajoutez le chemin vers vos composants
    // Exemples supplémentaires :
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#FFFFFF',
      'bg-primary':'#131315',
      'text-primary-h1':'#000000',
      'text-regular':'#131315',
      'bg-card':'#FEF2F2',
      'bg-card-2':'#D5D3C3',
      'bg-card-3':'#EBF2FB',
      "border-color":"#E3ADAD",
      "border-color-2":"#A8A061",
      "border-color-3":"#81A5D4",
      "border-color-4":"#F4F4F4",
      "text-color-4":"#F4F4F4",

    },
    extend: {
      fontFamily:{
        sans:[
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ]
      },
      fontSize:{
        'text-span':'0.7rem',
      }
    },
  },
  plugins: [],
}