import { createAction, createReducer } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: number,
  messages: any[]
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  messages: [
    {
      id: -1,
      message:  'Ola',
      date: new Date().toISOString(),
    },
    {
      id: -2,
      message:  't piko la qla',
      status: 'DELIVERED',
      mine: true,
      date: new Date().toISOString(),
    },
  ],
}

for (let i = 0; i < 50; i++) {
  initialState.messages.push ({
    id: i,
    message:  't piko la qla',
    status: 'DELIVERED',
    mine: i%2==0,
    date: new Date().toISOString(),
  })
}


export const testReducer = createReducer(initialState, (builder) => {
  builder
    .addCase( createAction<[]>('TEST') , (state, action) => {
      console.log("test")
      state.messages.push (action.payload)
    })
})