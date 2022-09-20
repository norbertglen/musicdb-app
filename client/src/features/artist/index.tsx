import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArtistProfile from "./Profile";
import { getArtist } from "../../api/artist";
import ProfileLoader from "./ProfileLoader";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getArtist(parseInt(id))
        .then((res) => {
          setArtist(Object.assign(res))
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading && !artist) {
    return <ProfileLoader />;
  }

  return (
    <>
      <ArtistProfile artist={artist} />
    </>
  );
};

export default Artist;
