import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signinAPI } from './userAPIs';

const initialState = { user: null };

export const signin = createAsyncThunk(
  'users/signin',
  async (data, thunkAPI) => {
    try {
      const result = await signinAPI(data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
