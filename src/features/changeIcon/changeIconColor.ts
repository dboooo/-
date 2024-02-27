import { createSlice } from "@reduxjs/toolkit";

export const changeIconColor = createSlice({
  name: 'changeIconColor',
  initialState: {
    value: true
  },
  reducers: {
    increment: state => {
      state.value = !state.value
    }
  }
})

export default changeIconColor.reducer
