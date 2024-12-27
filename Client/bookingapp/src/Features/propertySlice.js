import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    property: [],
    filteredProperties: [],
  },
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload;
    },
    setFilteredProperties: (state, action) => {
      state.filteredProperties = action.payload;
    },
  },
});

export const {
  setProperty,
  setSavedPropertyIDs,
  addSavedPropertyID,
  removeSavedPropertyID,
  setFilteredProperties,
} = propertySlice.actions;
export default propertySlice.reducer;
