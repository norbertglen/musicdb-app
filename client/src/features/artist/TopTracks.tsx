import React, { useEffect, useMemo, useState } from "react";

import { search } from "../../api/tracks";
import { Artist } from "../../types/artist";
import {
  Badge,
  Box,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { TrackSearchResult } from "../../types/track";
import getDuration from "../../utils/getDuration";

interface TProps {
  artist: Artist;
}

interface TrackListItemProps {
  name: string;
  duration: number;
}

const TrackListItem = ({ name, duration }: TrackListItemProps) => {
  const durationTaken = useMemo(() => getDuration(duration), [duration]);
  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-between">
      <Text>{name}</Text>
      <Badge borderRadius="full" px="2" colorScheme="gray">
        {durationTaken}
      </Badge>
    </Box>
  );
};
const TopTracks = ({ artist }: TProps) => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState();

  useEffect(() => {
    if (artist) {
      setLoading(true);
      search({ artist: artist.name })
        .then(({ data }) => {
          setTracks(Object.assign(data));
        })
        .finally(() => setLoading(false));
    }
  }, [artist]);

  if (loading && !tracks) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        mt={3}
        overflow="auto"
      >
        {(tracks || []).map((track: TrackSearchResult) => (
          <TrackListItem
            key={track?.id}
            name={`${track.title}`}
            duration={track.duration}
          />
        ))}
      </Stack>
    </>
  );
};

export default TopTracks;
