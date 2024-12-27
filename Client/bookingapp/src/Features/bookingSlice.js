import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "Booking",
  initialState: { booking:null ,cancel:'pending'},
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    setCancelled:(state,action)=>{
        
    }

  },
});

export const {setBooking  } = bookingSlice.actions;
export default bookingSlice.reducer;