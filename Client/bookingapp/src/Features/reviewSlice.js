import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    allreviews:[],
    likes:[],
    dislikes:[],
    progress:[],
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setAllReviews:(state,action)=>{
      state.allreviews=action.payload
      
    },
    LikeReview:(state,action)=>{
state.likes=action.payload
    },
    DislikeReview:(state,action)=>{
      state.dislikes=action.payload
    },
    setProgress:(state,action)=>{
      state.progress=action.payload
    }

  },
});

export const { setReviews ,setAllReviews,LikeReview,DislikeReview,setProgress} = reviewSlice.actions;
export default reviewSlice.reducer;
