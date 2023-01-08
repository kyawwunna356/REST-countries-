import { Box, Text , Image, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
// import Image from 'next/image'

function Country({country}) {
  const element = useColorModeValue('lightElement','darkElement')
  return (
    <Box w={['100%','45%','23%']} mx={1} my={4} rounded='lg' shadow='lg' bg={element} cursor='pointer'>
        <Link passHref href={`/detail/${country.name.common.toLowerCase()}`} >
         <Box>
          <Image 
                // borderTopRightRadius='lg'
                // borderTopLeftRadius = 'lg'
                src={country.flags.svg}
                width='400px'
                height='200px'
                objectFit='cover'
                alt='flag'
            />
            <Box p={5}>
                <Text mb={3}>{country.name.common}</Text>
                <Box mb={3}>Population: <Box as='span' color='gray'>{country.population}</Box></Box>
                <Box mb={3}>Region: <Box as='span' color='gray'>{country.region}</Box></Box>
                <Box mb={3}>Capital: <Box as='span' color='gray'>{country.capital && country.capital}</Box></Box>
            </Box>
         </Box>
        </Link>
        
    </Box>
  )
}

export default Country