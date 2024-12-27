import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "Booking",
  initialState: { booking:null},
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    }

  },
});

export const {setBooking  } = bookingSlice.actions;
export default bookingSlice.reducer;