import React, { useEffect, useState } from "react";

import { search } from "../../api/albums";
import ProfileLoader from "./ProfileLoader";
import { Artist } from "../../types/artist";
import Card from "../../components/Card";
import { Wrap } from "@chakra-ui/react";

interface AlbumProps {
  artist: Artist;
}
const Albums = ({ artist }: AlbumProps) => {
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (artist) {
      setLoading(true);
      search({ q: artist.name })
        .then((res) => {
          setAlbums(Object.assign(res.data));
        })
        .finally(() => setLoading(false));
    }
  }, [artist]);

  if (loading && !albums) {
    return <ProfileLoader />;
  }

  return (
    <>
      <Wrap spacing="30px" marginTop="5">
        {(albums || []).map((album: any) => (
          <Card
            key={album.id}
            title={album.title}
            coverUrl={album?.cover_big}
            subtitle={album?.artist?.name}
            description={album?.album?.title}
            width={{ sm: "45%", md: "45%", lg: "20%" }}
          />
        ))}
      </Wrap>
    </>
  );
};

export default Albums;
