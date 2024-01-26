import { createSlice } from "@reduxjs/toolkit";

const toggleLocationSlice = createSlice({
    name: "toggleLocation",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleLocation: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export default toggleLocationSlice.reducer;

export const { toggleLocation } = toggleLocationSlice.actions;
