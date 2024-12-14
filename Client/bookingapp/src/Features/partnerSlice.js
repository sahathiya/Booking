import { createSlice } from "@reduxjs/toolkit";


const partnerSlice=createSlice({
    name:'Partner',
    initialState:{partner:null},
    reducers:{
        LogPartner:(state,action)=>{
            state.partner=action.payload
        },
        LogoutPartner:(state)=>{
            state.partner=null
        },
        
    }
})


 export const {LogPartner,LogoutPartner} =partnerSlice.actions
 export default partnerSlice.reducer