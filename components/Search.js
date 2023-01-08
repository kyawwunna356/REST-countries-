import React from "react";
import { Flex, FormControl, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

function Search({handleInputChange, handleKeyDown, handleSearch, searchValue, setsearchValue, countryName}) {
    const bg = useColorModeValue('lightElement', 'darkElement')
  return (
    <form onKeyDown={handleKeyDown}>
      <Flex align="center">
        <FormControl w={["300px", "md", "xl"]} size="lg" mr={2}>
          <AutoComplete openOnFocus onChange={(vals) => setsearchValue(vals)}>
            <AutoCompleteInput
              variant="filled"
              placeholder="Search for a country"
              value={searchValue}
              onChange={e => setsearchValue(e.target.value)}
            />
            <AutoCompleteList>
              {countryName.map((country, cid) => (
                <AutoCompleteItem
                  key={`option-${cid}`}
                  value={country.toLowerCase()}
                  textTransform="capitalize"
                >
                  {country}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
          {/* <Button onClick={handleSearch}></Button> */}
          {/* <Input  type='text' placeholder='Search for a country' border='1px solid gray.800' onChange={(e)=>handleSearch(e)}/> */}
        </FormControl>
        <IconButton
          onClick={handleSearch}
          size="md"
          p={2}
          as={FaSearch}
        ></IconButton>
      </Flex>
    </form>
  );
}

export default Search;
