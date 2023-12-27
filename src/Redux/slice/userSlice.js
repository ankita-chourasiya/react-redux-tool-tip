import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    testState: "demo",
    count: 0
  },

  reducers: {
    handleTest: (state, action) => {
      state.testState = action.payload;
    },
    counterState: (state, action) => {
      state.count = state.count + 1;
    }
  }
})

export const { handleTest, counterState } = userSlice.actions;
export default userSlice.reducer;
