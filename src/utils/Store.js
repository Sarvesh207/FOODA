import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice,
        location:locationSlice
    }
});

export default store;













/**
 * 
 */