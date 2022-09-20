import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import SearchBox from "./SearchBox";
import { search } from "../api/tracks";
import { setTracks, setIsLoading } from "../redux/reducers/tracks";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = useCallback(
    (searchTerm: string) => {
      console.log("Searching...", searchTerm);
      if (searchTerm) {
        dispatch(setIsLoading(true));
        search({ q: searchTerm }).then((res) => {
          dispatch(setIsLoading(false));
          dispatch(setTracks(res.data));
        });
      }
    },
    [dispatch]
  );

  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="brand.100"
        bg={useColorModeValue("brand.50", "brand.100")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box color={"teal"} onClick={() => navigate("/")}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                MusicDb
              </Link>
            </Box>
            <SearchBox onSearch={onSearch} />
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "flex", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                Account
              </Link>
            </HStack>
          </Flex>
        </Flex>
      </Box>

      <Container maxW={{ base: "lg", sm: "7xl" }} fontSize="sm">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
