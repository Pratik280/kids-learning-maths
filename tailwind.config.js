module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        'clr-dark': 'hsl(250, 45%, 26%)',
        'clr-white': 'hsl(0, 0%, 100%)',

        'clr-accent-pink': 'hsl(345, 72%, 57%)',
        'clr-accent-purple': 'hsl(250°, 34%, 52%)',
        'clr-accent-yellow': 'hsl(48, 86%, 57%)',
        'clr-accent-blue': 'hsl(48, 86%, 57%)',
      },
      backgroundImage: {
      'hero-pattern': "url('./dist/images/Waimakariri.svg')",
    }
  },
},
plugins: [ ],
}
