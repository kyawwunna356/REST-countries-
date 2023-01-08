import React from "react";
import { Box, Flex, Icon, Input, InputGroup , InputLeftElement, Select } from '@chakra-ui/react'
import { baseURL, fetchData } from '../../utils/fetchApi'
import Country from '../../components/Country'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from "next/router";



function Region({data,allData}) {
    const router = useRouter()
    const routeArray = router.asPath.split('/')
    const currentRegion = routeArray[routeArray.length -1]
    

    function handleChange(e){
        const region = e.target.value
        // console.log(e.target.value)
        // query.region = e.target.value.toLowerCase() 
        // path += 'region'
        // console.log(path)
        // console.log(query)
        router.push(`/region/${region}`)
    
      }
  return (
    <Box>
      <Flex
        justify={["space-between", "space-between"]}
        align={["flex-start  ", "center"]}
        my={["0", "3"]}
        direction={["column", "row"]}
      >
        <InputGroup w={["sm", "md", "xl"]}>
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2em"
            mt={1}
            children={<Icon as={FaSearch} color="gray.300" />}
          />
          <Input type="text" placeholder="Search for a country" size="lg" />
        </InputGroup>
        <Select
          placeholder="Filter By Region"
          size="lg"
          width="fit-content"
          mt={["3", "0"]}
          onChange={(e) => handleChange(e)}
        >
            {allData.map((el,i) => {
                if(el.region.toLowerCase() === currentRegion) {
                    return <option selected value={el.region.toLowerCase() } key={i}>{el.region.toLowerCase()}</option>
                } else {
                    return <option  value={el.region.toLowerCase() } key={i}>{el.region.toLowerCase()}</option>
                }
            })}
          {/* {data.map((el, i) => (
                el.region.toLowerCase() === currentRegion ? <option selected value={el.region.toLowerCase() } key={i}>{el.region.toLowerCase() }</option> : <option value={el.region.toLowerCase() } key={i}>{el.region.toLowerCase() }</option>
          ))} */}
        </Select>
      </Flex>
      <Flex flexWrap="wrap" justify="space-between" align="center">
        {data.map((el, i) => {
          return <Country key={i} country={el} />;
        })}
      </Flex>
    </Box>
  );
}

export default Region;

export async function getServerSideProps(context) {

const region = context.params.region
  const data = await fetchData(`${baseURL}/region/${region}`);
  const allData = await fetchData(`${baseURL}/all`)
  return {
    props: {
      data,
      allData
    },
  };
}
