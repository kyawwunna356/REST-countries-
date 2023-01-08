import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config:  {
      initialColorMode : 'light',
      useSystemColorMode : false,
    },
    colors: {
      darkElement: ' hsl(209, 23%, 22%)',
      darkText: 'hsl(0, 0%, 100%)',
      lightElement: 'hsl(0, 0%, 100%)',
      darkBg: 'hsl(209, 23%, 22%)',
      lightText: 'hsl(200, 15%, 8%)',
      lightInput: 'hsl(0, 0%, 52%)',
      lightBg: 'hsl(0, 0%, 90%)',
    },
    fonts: {
      body: 'Nunito Sans , sans-serif',
      heading: 'Nunito Sans , sans-serif',
    },
    breakpoints: {
      md: '55em',
    }
  })

  export default theme