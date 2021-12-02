import { createAction, createReducer } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UIState {
  profileDrawerOpened: boolean,
  newMessageOpened: boolean,
}

// Define the initial state using that type
const initialState: UIState = {
  profileDrawerOpened: false,
  newMessageOpened: false,
}

export const uiReducer = createReducer(initialState, (builder) => {
  builder
    .addCase( createAction<boolean>('SET_PROFILE_DRAWER_OPENED') , (state, action) => {
      state.profileDrawerOpened = action.payload
    })
    .addCase( createAction<boolean>('SET_NEW_MESSAGE_DRAWER_OPENED') , (state, action) => {
      state.newMessageOpened = action.payload
    })
})