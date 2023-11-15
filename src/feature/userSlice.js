import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    //! ========= LOGIN =======//
    login: (state, action) => {
      state.user = action.payload;
    },

    //!  ==== LOGOUT =====//
    logout: (state) => {
      state.user = null;
    },
  },
});

// *============= EXPORT =================== *//

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
