import React from 'react'
import { Text,  Box, Flex, Select } from '@chakra-ui/react'

function FilterBox() {
  return (
    <Flex justify="space-around" flexDirection={{ base: "column", sm: "row" }}>
        <Box p="1">
          <Text fontSize="2xl">Track Finder</Text>
          <Text as="p" fontSize="md">Find all your favourite songs here.</Text>
        </Box>
        <Box p="5"  w={{ base: "full", sm: "md" }}>
            <Select placeholder="Sort by" bg="white">
                <option value="option1">Artist Name</option>
                <option value="option2">Date of Production</option>
            </Select>
        </Box>
    </Flex>
  )
}

export default FilterBox