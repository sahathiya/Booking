// import { createSlice } from "@reduxjs/toolkit";

// const savedSlice=createSlice({
//     name:'saved',
//     initialState:savedproperties=[],
//     reducers:{
//         setallsaved:(state,action)=>{
//        state.savedproperties=action.payload
//         },

//     }

// })

// export const { setallsaved } = savedSlice.actions;
// export default savedSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const savedSlice = createSlice({
//   name: 'saved',
//   initialState: {
//     savedProperties: [],
//   },
//   reducers: {
//     setAllSaved: (state, action) => {
//       state.savedProperties = action.payload;
//     },
//     toggleSaved: (state, action) => {
//       const propertyID = action.payload;
//       if (state.savedProperties.includes(propertyID)) {
//         state.savedProperties = state.savedProperties.filter(id => id !== propertyID); // Remove from saved
//       } else {
//         state.savedProperties.push(propertyID); // Add to saved
//       }
//     },
//   }
// });

// export const { setAllSaved, toggleSaved} = savedSlice.actions;
// export default savedSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    savedProperties: [],
  },
  reducers: {
    setAllSaved: (state, action) => {
      state.savedProperties = action.payload; // Overwrite the savedProperties array
    },
    removeProperty: (state, action) => {
      
            state.savedProperties = state.savedProperties.filter(item => item._id !== action.payload);
           },
  },
});

export const { setAllSaved,removeProperty } = savedSlice.actions;
export default savedSlice.reducer;
