import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "Booking",
  initialState: { booking:null,clientsecret:"",bookings:[]},
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    setClientSecretkey:(state,action)=>{
      state.clientsecret = action.payload;
    },
    setAllBooking:(state,action)=>{
      state.bookings=action.payload
    }

  },
});

export const {setBooking ,setClientSecretkey,setAllBooking } = bookingSlice.actions;
export default bookingSlice.reducer;