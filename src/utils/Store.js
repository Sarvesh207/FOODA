import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import locationSlice from "./locationSlice";
import toggleLocationSlice from "./toggleLocationSlice"

const store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice,
        location:locationSlice,
        toggleLocation:toggleLocationSlice

    }
});

export default store;













/**
 * 
 */