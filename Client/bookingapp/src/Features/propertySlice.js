import { createSlice } from "@reduxjs/toolkit";

const propertySchema = createSlice({
  name: "property",
  initialState: { property: [] },
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const { setProperty } = propertySchema.actions;
export default propertySchema.reducer;
