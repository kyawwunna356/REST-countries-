// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../utils/theme'
import { Chakra } from '../utils/chakra'
function MyApp({ Component, pageProps }) {
 

   
  return (
    <Chakra   cookies={pageProps.cookies} theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
export default MyApp