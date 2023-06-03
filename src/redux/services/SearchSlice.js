import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: '',
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearchActions: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearchActions } = SearchSlice.actions;

export const SearchReducer = SearchSlice.reducer;

export const getSearch = (state) => state.Search;
