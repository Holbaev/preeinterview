import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const {
  setUser,
  setIsAuth
} = AuthSlice.actions;

export default AuthSlice.reducer;
