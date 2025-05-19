import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    price: { min: 0, max: 0 },
    category: "",
};
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPriceState: (state, action) => {
            console.log(action.payload);
            if (action.payload == "") {
                console.log("true");
                state.price.min = 0;
                state.price.max = 0;
            }
            else {
                state.price.min = action.payload.min;
                state.price.max = action.payload.max;
            }
        },
        setCategoryState: (state, action) => {
            state.category = action.payload;
        },
    },
});
export const { setCategoryState, setPriceState } = filterSlice.actions;
export default filterSlice.reducer;
