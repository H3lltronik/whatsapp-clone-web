import { createReducer } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: number,
  messages: any[]
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  messages: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
}

export const testReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('TEST', (state, action) => {
      state.value = 10
    })
})