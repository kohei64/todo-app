import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: 4475,
  reducers: {
    addTime: (state:number, action) => {
      return state+=action.payload;
    },
  },
});



export const { addTime } = timerSlice.actions;
export default timerSlice.reducer;