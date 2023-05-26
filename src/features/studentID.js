import { createSlice } from '@reduxjs/toolkit'

export const studentIDSlice = createSlice({
  name: 'studentID',
  initialState: {
    value: "",
  },
  reducers: {
    setStudentID: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStudentID } = studentIDSlice.actions

export default studentIDSlice.reducer