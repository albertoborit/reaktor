import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  auth: false,
  UID: "",
  username: "",
  session: ""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action) {
      if(action.payload.password) {
        state.auth = true
        state.session = action.payload.password
        state.username = action.payload.username
        state.UID = "234234234"
      }
    }
  },
})

export const { authenticate } = authSlice.actions
export default authSlice.reducer