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
                // Only remove if the existing location is different from the new one
                if (existingLocation !== JSON.stringify(action.payload)) {
                    localStorage.removeItem("UserLocation");
                }
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
