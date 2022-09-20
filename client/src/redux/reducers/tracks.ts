import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  loading: false,
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.searchResults = action.payload;
    },
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setTracks, setIsLoading } = tracksSlice.actions;

export default tracksSlice.reducer;
