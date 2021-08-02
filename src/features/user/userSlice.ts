import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, loginWithGoogle } from "../../app/firebase";
import { RootState } from "../../app/store";

export interface UserState {
  user: any;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk("user/fetchLogin", async () => {
  const response = await loginWithGoogle();
  return response;
});

export const logoutAsync = createAsyncThunk("user/fetchLogout", async () => {
  const response = await auth.signOut();
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cleanUser: (state) => {
      state.user = null;
    },
    changeUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = "";
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { cleanUser, changeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
