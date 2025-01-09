import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: { admin: null ,users:[],partners:[],properties:[],bookings:[]},
  reducers: {
    LogAdmin: (state, action) => {
      state.admin = action.payload;
    },
    LogoutAdmin: (state) => {
      state.admin = null;
    },
    AllUsers:(state,action)=>{
      state.users=action.payload
    },
    AllPartners:(state,action)=>{
state.partners=action.payload
    },
    AllProperties:(state,action)=>{
        state.properties=action.payload
    },
    AllBookings:(state,action)=>{
      state.bookings=action.payload
    }
    
  },
});

export const { LogAdmin, LogoutAdmin,AllUsers,AllPartners,AllProperties,AllBookings } = adminSlice.actions;
export default adminSlice.reducer;
