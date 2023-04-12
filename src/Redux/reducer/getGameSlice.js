import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const getGameSlice = createSlice({
  name: "videoGame",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { getAll } = getGameSlice.actions;
export default getGameSlice.reducer;
