import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: false,
  reducers: {
    openDrawer: () => true,
    closeDrawer: () => false,
  },
});

export const { openDrawer ,closeDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;
