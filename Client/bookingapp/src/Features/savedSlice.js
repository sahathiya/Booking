import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    savedProperties: [],
  },
  reducers: {
    setAllSaved: (state, action) => {
      state.savedProperties = action.payload;
    },
  },
});

export const { setAllSaved } = savedSlice.actions;
export default savedSlice.reducer;
