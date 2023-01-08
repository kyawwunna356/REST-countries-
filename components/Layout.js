import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import {Box, useColorModeValue} from '@chakra-ui/react'
import Footer from './Footer'

function Layout({children}) {
    const bg = useColorModeValue('lightBg','DarkBg')
  return (
    <>
        <Head>
            <title>NEXT Countries</title>
        </Head>
        <header>
            <NavBar></NavBar>
        </header>
        <Box py={[5,10]} px={[5,10,20]} bg={bg}>
            <main>
                {children}
            </main>
        </Box>
        <Box py={[3]} px={[5,10,20]} bg={bg}>
        <footer>
            <Footer />
        </footer>
        </Box>
    </>
  )
}

export default Layout