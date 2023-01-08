import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  FormControl,
  IconButton,
  Button
} from "@chakra-ui/react";
import { baseURL, fetchData } from "../utils/fetchApi";
import React from "react";
import Country from "../components/Country";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import Search from "../components/Search";

export default function Home({ data }) {
  const [searchValue , setsearchValue] = React.useState('')
  console.log(searchValue)
  const countryName = data.map((el) => el.name.common);
  const router = useRouter();
  // console.log(router)
  // const path = router.pathname
  // const query = router.query

  function handleChange(e) {
    const region = e.target.value;
    // console.log(e.target.value)
    // query.region = e.target.value.toLowerCase()
    // path += 'region'
    // console.log(path)
    // console.log(query)
    router.push(`/region/${region}`);
  }

  function handleSearch(e) {
    e.preventDefault();
    router.push(`/detail/${searchValue}`)
  }

  function handleKeyDown(e){
    if(e.key === "Enter"){  
      router.push(`/detail/${searchValue}`)
    }
  }
  function handleInputChange(){
    setsearchValue(value)
  }

  return (
    <Box>
      <Flex
        justify={["space-between", "space-between"]}
        align={["flex-start  ", "center"]}
        my={["0", "3"]}
        direction={["column", "row"]}
      >
        <Search countryName={countryName} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown} handleSearch={handleSearch} searchValue={searchValue} setsearchValue={setsearchValue}/>
        <Select
          placeholder="Filter By Region"
          size="lg"
          width="fit-content"
          mt={["3", "0"]}
          onChange={(e) => handleChange(e)}
        >
          {data.map((el, i) => (
            <option value={el.region.toLowerCase()} key={i}>
              {el.region.toLowerCase()}
            </option>
          ))}
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

export async function getStaticProps(context) {
  console.log(context.params);
  const data = await fetchData(`${baseURL}/all`);
  return {
    props: {
      data,
    },
  };
}
