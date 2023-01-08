import {  Divider, Box, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box>
        <Divider mb={5}/>
        <Text margin='auto' w={['xs','lg','lg']} textAlign='center' color='gray'>REST country API from frontend Mentor developed by <span style={{fontWeight: 'bold'}}>Kyaw Wunna</span></Text>
    </Box>
  )
}

export default Footer