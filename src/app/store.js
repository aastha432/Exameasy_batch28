import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import studentIDReducer from '../features/studentID'
import examIDReducer from '../features/examID'

export default configureStore({
  reducer: {
    counter: counterReducer,
    studentID : studentIDReducer,
    examID : examIDReducer
  },
})