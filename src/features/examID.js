import { createSlice } from '@reduxjs/toolkit'

export const examIDSlice = createSlice({
  name: 'examID',
  initialState: {
    value: "",
  },
  reducers: {
    setExamID: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setExamID } = examIDSlice.actions

export default examIDSlice.reducer