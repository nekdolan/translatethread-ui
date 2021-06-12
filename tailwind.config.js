module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url(https://translatethread.com/images/DSCN0089.webp)",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
