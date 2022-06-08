module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightred: 'hsl(12, 88%, 59%)',
        darkblue: 'hsl(228, 39%, 23%)',
        darkgrayishblue: 'hsl(227, 12%, 61%)',
        verydarkblue: 'hsl(233, 12%, 13%)',
        verypalered: 'hsl(13, 100%, 96%)',
        varylightgray: 'hsl(0, 0%, 98%)'
      }
    }
  },
  plugins: [],
}
