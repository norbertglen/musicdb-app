import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Skeleton,
  Alert,
  AlertIcon,
  SimpleGrid,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Card from "../../components/Card";
import { TrackSearchResult } from "../../types/track";
import getDuration from "../../utils/getDuration";

interface ComponentProps {
  tracks: any[];
}
interface RootState {
  tracks: { [key: string]: any };
}

export const TrackListLoader = () => (
  <SimpleGrid
    w="container.lg"
    columns={[2, null, 3]}
    m="auto"
    mt={6}
    pt={15}
    spacing={15}
    id="loader"
  >
    {[...Array(3)].map((x, i) => (
      <Stack key={i}>
        <Skeleton height="100px" />
        <Skeleton height="50px" />
        <Skeleton height="30px" />
      </Stack>
    ))}
  </SimpleGrid>
);

export const TrackList = (props: ComponentProps) => {
  const [error, setError] = useState(null);
  const loading = useSelector((state: RootState) => state?.tracks?.loading);

  const navigate = useNavigate();

  const onSelect = (track: TrackSearchResult) =>
    navigate(`artist/${track?.artist?.id}`);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Tracks could not be loaded...
      </Alert>
    );
  }

  if (loading) {
    return <TrackListLoader />;
  }

  return (
    <>
      <Wrap spacing="30px" marginTop="5">
        {(props.tracks || []).map((track: any) => (
          <Card
            key={track.id}
            title={track.title}
            coverUrl={track?.album?.cover_big}
            subtitle={track?.artist?.name}
            description={track?.album?.title}
            secondary={getDuration(track.duration)}
            onSelect={() => onSelect(track)}
            width={{ sm: "45%", md: "45%", lg: "30%" }}
          />
        ))}
      </Wrap>
    </>
  );
};

export default TrackList;
