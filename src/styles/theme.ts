import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    green: {
      '900': '#07342e',
      '700': '#006557',
      '500': '#00816f',
      '300': '#3e978b',
      '200': '#7fc7bd'
    },
    gray: {
      '700': '#424f4d',
      '300': '#6d7a78'
    },
    blue: {
      '500': '#07689f'
    }
  },
  styles: {
    global: {
      body: {
        bg: '#f8f8f8',
        color: 'black',
        fontFamily: 'Montserrat'
      }
    }
  }
})