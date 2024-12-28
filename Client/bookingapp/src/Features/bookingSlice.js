import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "Booking",
  initialState: { booking:null,clientsecret:""},
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    setClientSecretkey:(state,action)=>{
      state.clientsecret = action.payload;
    }

  },
});

export const {setBooking ,setClientSecretkey } = bookingSlice.actions;
export default bookingSlice.reducer;