/** @type {import('tailwindcss').Config} */
const _ =  require('lodash')
// const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        prototurk: '#32445a',
        github: ' #333'
      },
      spacing: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [
    // plugin(function({addUtilities, theme, e}) {
    //   const calcUtilities = _.map(theme('spacing'), (value, key) => {
    //     return {
    //       [`.${e(`calc-h-full-${key}`)}`]: {
    //         height: `calc(100% - ${value})`
    //       },
    //       [`.${e(`calc-w-full-${key}`)}`]: {
    //         width: `calc(100% - ${value})`
    //       },
    //     }
    //   })
    //   addUtilities(calcUtilities, {
    //     variants: ['responsive', 'hover']
    //   })
    // })
  ],
}

