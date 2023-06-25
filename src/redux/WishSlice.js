import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name:'wish',
    initialState:{
        wishProductIds:[]
    },
    reducers:{
        addWish(state, action){
            state.wishProductIds = [action.payload, ...state.wishProductIds];
        },    
        removeFromWish(state, action){
            const indexOfId = state.wishProductIds.indexOf(action.payload);
            state.wishProductIds.splice(indexOfId, 1);
        },
        clearAllItems(state){
            state.wishProductIds = [];
        }
    }
})

export let {addWish, removeFromWish, clearAllItems} = wishSlice.actions;
export default wishSlice;