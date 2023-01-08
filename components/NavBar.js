import { Flex, Heading ,IconButton, Spacer, useColorMode, useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import { HiSun } from "react-icons/hi";
import {FaMoon} from 'react-icons/fa'

function NavBar() {
  const {colorMode, toggleColorMode} = useColorMode()
  const color = useColorModeValue('lightText','darkText')
  const element = useColorModeValue('lightElement','darkElement')

  return (
    <Flex justify='space-between' align="center" py={10} px={['5','10','20']} boxShadow='xl' bg={element}>
        <Heading fontSize={['2xl','4xl']} color={color}>Where in the world?</Heading>
        <Spacer/>
        <IconButton
            onClick={toggleColorMode}
            aria-label='Toggle dark/light mode'
            icon={colorMode == "light" ? <FaMoon /> : <HiSun />}
            />
    </Flex>
  )
}

export default NavBar