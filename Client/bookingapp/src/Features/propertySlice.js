// // import { createSlice } from "@reduxjs/toolkit";

// // const propertySchema = createSlice({
// //   name: "property",
// //   initialState: { property: [] },
// //   reducers: {
// //     setProperty: (state, action) => {
// //       state.property = action.payload;
// //     },
// //     removeProperty: (state, action) => {
// //       state.property = state.property.filter(item => item._id !== action.payload);
// //     },
// //   },
// // });

// // export const { setProperty,removeProperty } = propertySchema.actions;
// // export default propertySchema.reducer;


// // import { createSlice } from '@reduxjs/toolkit';

// // const propertySlice = createSlice({
// //   name: 'property',
// //   initialState: {
// //     property: [],
// //     // Array to store the saved property IDs
// //   },
// //   reducers: {
// //     setProperty: (state, action) => {
// //       state.property = action.payload;
// //     },
// //     removeProperty: (state, action) => {
// //       state.property = state.property.filter(item => item._id !== action.payload);
// //     },
// //     setSavedProperties: (state, action) => {
// //       state.property = action.payload; // Set saved properties from the backend
// //     },
// //     toggleSavedProperty: (state, action) => {
// //       const propertyId = action.payload;
// //       // Toggle the saved property status
// //       if (state.property.includes(propertyId)) {
// //         state.property = state.property.filter(id => id !== propertyId);
// //       } else {
// //         state.property.push(propertyId);
// //       }
// //     }
// //   },
// // });

// // export const { setProperty, removeProperty, setSavedProperties, toggleSavedProperty } = propertySlice.actions;
// // export default propertySlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const propertySlice = createSlice({
//   name: 'property',
//   initialState: {
//     property: [], // List of all properties
//    // List of saved property IDs
//   },
//   reducers: {
//     setProperty: (state, action) => {
//       state.property = action.payload;
//     },
//     removeProperty: (state, action) => {
//            state.property = state.property.filter(item => item._id !== action.payload);
//          },
    
//   },
// });

// export const { setProperty,removeProperty } = propertySlice.actions;
// export default propertySlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    property: [], // List of all properties
    savedPropertyIDs: [], // List of saved property IDs,
    filteredProperties:[]
  },
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload; // Set all properties
    },
    setSavedPropertyIDs: (state, action) => {
      state.savedPropertyIDs = action.payload; // Set saved property IDs
    },
    addSavedPropertyID: (state, action) => {
      state.savedPropertyIDs.push(action.payload); // Add a property ID to saved
    },
    removeSavedPropertyID: (state, action) => {
      state.savedPropertyIDs = state.savedPropertyIDs.filter(
        (id) => id !== action.payload
      ); // Remove a property ID from saved
    },
    setFilteredProperties:(state,action)=>{
      state.filteredProperties=action.payload
    }
  },
});

export const {
  setProperty,
  setSavedPropertyIDs,
  addSavedPropertyID,
  removeSavedPropertyID,
  setFilteredProperties
} = propertySlice.actions;
export default propertySlice.reducer;
