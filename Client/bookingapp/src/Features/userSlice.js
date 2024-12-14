import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'User',
    initialState:{user:null},
    reducers:{
        LogUser:(state,action)=>{
            state.user=action.payload
        },
        LogoutUser:(state)=>{
            state.user=null
        },
        updateUser: (state, action) => {
            state.user = action.payload
          },
    }
})


 export const {LogUser,LogoutUser,updateUser} =userSlice.actions
 export default userSlice.reducer