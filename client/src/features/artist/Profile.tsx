import React from "react";
import {
  Box,
  VStack,
  Divider,
  chakra,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import { Artist } from "../../types/artist";
import NotFound from "../../components/Page404";
import nFormatter from "../../utils/nFormat";
import Albums from "./Albums";
import TopTracks from "./TopTracks";

interface ArtistProfileProps {
  artist: Artist | undefined;
}

export default function ArtistProfile({ artist }: ArtistProfileProps) {
  if (!artist) return <NotFound />;

  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        w={"full"}
        h={{ base: "100vh", sm: "30vh" }}
        backgroundImage={{
          base: artist.picture_medium,
          sm: artist.picture_small,
          md: artist.picture_medium,
          lg: artist.picture_big,
          xl: artist.picture_xl,
        }}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          w={"full"}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
          >
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" color="white" fontWeight="700">
                {artist.name}
              </chakra.h2>
              <chakra.h4 fontSize="2xl" color="white" fontWeight="500">
                {nFormatter(parseInt(artist.nb_fan))} fans
              </chakra.h4>
              <Text color="white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: "3", sm: "0" }}
          bg="white"
          p={3}
          maxW="sm"
          opacity={0.97}
        >
          <Heading fontWeight="semibold" fontSize="2xl">
            Top tracks
          </Heading>
          <TopTracks artist={artist} />
        </Box>
      </Flex>
      <Divider mt={2} mb={2} />
      <Heading fontSize="2xl">Albums</Heading>
      <Divider mt={2} mb={2} />
      <Albums artist={artist} />
    </Box>
  );
}
