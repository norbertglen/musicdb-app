import React from "react";
import { SimpleGrid, Stack, Skeleton } from "@chakra-ui/react";

const ProfileLoader = () => (
  <>
    <Skeleton height="100px" />
    <SimpleGrid
      w="container.lg"
      columns={[2, null, 4]}
      m="auto"
      mt={6}
      pt={15}
      spacing={15}
    >
      {[...Array(4)].map((x, i) => (
        <Stack key={i}>
          <Skeleton height="100px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </Stack>
      ))}
    </SimpleGrid>
  </>
);
export default ProfileLoader;
