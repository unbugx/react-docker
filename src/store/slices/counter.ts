import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increase(state) {
      state.counter += 1
      return state
    },
    decrease(state) {
      state.counter -= 1
      return state
    },
    reset(state) {
      state.counter = 0
      return state
    },
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = counterSlice
// Extract and export each action creator by name
export const { increase, decrease, reset } = actions
// Export the reducer, either as a default or named export
export default reducer
