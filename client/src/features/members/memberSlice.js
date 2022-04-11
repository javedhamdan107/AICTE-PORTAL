import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findMembersAPI } from './memberAPIs';

const initialState = { member: null };

export const findMembers = createAsyncThunk(
    'members/findMembers',
    async (data, thunkAPI) => {
      try {
        const result = await findMembersAPI(data);
        return result.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );


  export const memberSlice = createSlice({
    name: 'members',
    initialState,
    /* eslint-disable no-param-reassign */
    reducers: {
    },
    extraReducers: {
      [findMembers.fulfilled]: (state, action) => {
        state.member = action.payload;
      },
    },
    /* eslint-enable no-param-reassign */
  });
  
  export default memberSlice.reducer;