import { Box, Button, Flex, Heading, Icon, Tag, Text, Spinner } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import { fetchData , baseURL} from '../../utils/fetchApi'
import { useRouter } from 'next/router'

function Detail({data}) {
  const router = useRouter()
  console.log(data)
  const country = data[0]
  const currencies = country.currencies
  const currencyName = Object.keys(currencies)[0]

  const {nativeName} = country.name
  const keyName = Object.keys(nativeName)[0]

  const {languages} = country
  const languagesArrayKeys = Object.keys(languages)
  const languagesArray = languagesArrayKeys.map(el => languages[el])
  
  if (router.isFallback){
    return (
      <Spinner />
    );
  }
  return (
    <Box w={['90%','80%','90%']} m={['auto','auto',0]}>
      <Box onClick={() => router.push('/')} mt={[6,0]} mb={[-4,0]}>
        <Button boxShadow='xl' leftIcon={<Icon mr={2} as={FaArrowLeft}/>} border='1px solid gray.400'>Back</Button>
      </Box>
      <Flex justify='space-between' align={['center','flex-start','center']} my={4} direction={['column','column','row']}>
        <Box width={['xs','lg','lg']} height={['xs','sm']} position='relative' mb={[4,10,0]}>
          <Image src={country.flags.svg} layout="fill" objectPosition='50% 50%'  alt={country.name.common}></Image>
        </Box>
        <Box textAlign='left'>
          <Heading>{country.name.official}</Heading>
          <Flex justify='space-between' align='flex-start' direction={['column','column','row']} my={10}>
            <Box mb={[8,4]}>
              <Text mb={2}>Native Name: {country.name.nativeName ? country.name.nativeName[keyName].common : "???"}</Text>
              <Text mb={2}>Population: {country.population}</Text>
              <Text mb={2}>Region: {country.region}</Text>
              <Text mb={2}>Sub-Region: {country.subregion}</Text>
              <Text >Captital: {country.capital}</Text>
            </Box>
            <Box>
              <Text mb={2}>Top Level Domain: {country.tld[0]}</Text>
              <Text mb={2}>Currencies: {country.currencies[currencyName].name}</Text>
              <Text >Languages: {languagesArray.join()}</Text>
            </Box>
          </Flex>
          {/* <Flex align={['flex-start','flex-start','center']} direction={['column','column','row']}>
            <Text mb={[3,3,0]} mr={3}>Border Countries:</Text>
            <Box>
            <Tag mr={3} size={['md','lg']}>France</Tag>
            <Tag mr={3} size={['md','lg']}>France</Tag>
            <Tag mr={3} size={['md','lg']}>France</Tag>
            </Box>
          </Flex> */}
        </Box>
      </Flex>
    </Box>
  )
}

export default Detail

// export async function getStaticPaths(){
//   const data = await fetchData(`${baseURL}/all`)
//   const paths = data.map(el =>{
//     return {
//       params: {
//         name: el.name.common.toLowerCase()
//       }
//     }
//   })
//   return {
//     paths: paths,
//     fallback: false
//   }
// }


export async function getServerSideProps(context){
  const {params: {name}} = context;
  const data = await fetchData(`${baseURL}/name/${name}`)
  return {
    props: {
      data: data
    }
  }
}