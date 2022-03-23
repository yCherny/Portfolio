import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    value: 0,
  },
  reducers: {
    moveTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { moveTo } = paginationSlice.actions;
export default paginationSlice.reducer;
