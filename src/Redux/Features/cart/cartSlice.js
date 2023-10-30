import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../../jsons/card_json.json"

const initialState={
    carts:[...cartData]

}





export const cartSlice =createSlice({
    name: "carts",
    initialState,
    reducers:{
        createCart:(state,action)=>{

            state.carts.unshift(action.payload)
        }
    },

})

export const {createCart} =cartSlice.actions;

export default cartSlice.reducer;