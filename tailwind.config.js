module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "swyft-primary" : "#F86500",
        "event-color": "#F9F8F8"
      }
    },
  },
  variants: {
    extend: {},
  },
}
