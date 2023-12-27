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
    counterStateIncrement: (state, action) => {
      state.count = state.count + 1;
    },
    counterStateDecrement: (state, action) => {
      state.count = state.count - 1;
    },
    counterStateReset: (state, action) => {
      state.count = 0;
    }
		
  }
})

export const { handleTest, counterStateIncrement, counterStateDecrement, counterStateReset } = userSlice.actions;
export default userSlice.reducer;
