import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ObjPrice = { min: number; max: number };

export interface IinitialState {
  price: ObjPrice;
  category: string;
}

export const initialState: IinitialState = {
  price: { min: 0, max: 0 },
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceState: (state, action: PayloadAction<ObjPrice | string>) => {
      console.log(action.payload)
      if (action.payload == "") {
        console.log("true")
        state.price.min = 0;
        state.price.max = 0;
      } else {
        state.price.min = action.payload.min;
        state.price.max = action.payload.max;
      }
    },
    setCategoryState: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoryState, setPriceState } = filterSlice.actions;
export default filterSlice.reducer;
