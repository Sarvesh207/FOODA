import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "location",
    initialState: {
        userLocation: null || JSON.parse(localStorage.getItem("UserLocation")),
    },
    reducers: {
        getLocation: (state, action) => {

            const existingLocation = localStorage.getItem("UserLocation");

            if (existingLocation) {
                // If exists, remove it from local storage
                localStorage.removeItem("UserLocation");
            }

            state.userLocation = action.payload;
            localStorage.setItem(
                "UserLocation",
                JSON.stringify(state.userLocation)
            );
        },
    },
});

export default locationSlice.reducer;
export const { getLocation } = locationSlice.actions;
