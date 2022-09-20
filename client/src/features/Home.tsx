import React from "react";
import { useSelector } from 'react-redux'

import { TrackList } from "./track";
import FilterBox from "../components/FilterBox";

interface RootState {
  tracks: {[key: string]: any}
}
const Home = () => {
  const data = useSelector((state: RootState) => state?.tracks?.searchResults)

  return (
  <>
    <FilterBox />
    <TrackList tracks={data} />
  </>
)};

export default Home