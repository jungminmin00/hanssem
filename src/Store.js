import wishSlice from "./redux/WishSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        wish:wishSlice.reducer
    }
})

export default store;