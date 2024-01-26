import { createSlice } from "@reduxjs/toolkit";
const localStorageKey = "cart";

const saveToLocalStorage = (state) => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const loadFromLocalStorage = () => {
    const storedState = localStorage.getItem(localStorageKey);
    return storedState ? JSON.parse(storedState) : { items: [] };
};

const cartSlice = createSlice({
    name: "cart",
    initialState: loadFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const itemInCart = state.items.find(
                (item) => item?.id === action.payload.id
            );

            if (itemInCart) {
                itemInCart.inStock++;
            } else {
                state.items.push(action.payload);
            }

            saveToLocalStorage(state);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item?.id !== action.payload
            );
            saveToLocalStorage(state);
        },
        clearCart: (state) => {
            state.items = [];
            saveToLocalStorage(state);
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item?.id === action.payload
            );
            if (item) {
                item.inStock++;
                saveToLocalStorage(state);
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item?.id === action.payload
            );
            if (item) {
                if (item.inStock === 1) {
                    item.inStock = 1;
                } else {
                    item.inStock--;
                }
                saveToLocalStorage(state);
            }
        },
    },
});

export const {
    addItem,
    removeItem,
    clearCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
