import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { viewBookingsAPI } from './bookingAPIs';

const initialState = { booking: null };

export const viewBookings = createAsyncThunk(
    'bookings/viewBookings',
    async (thunkAPI) => {
      try {
        const result = await viewBookingsAPI();
        return result.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );

  export const bookingSlice = createSlice({
    name: 'bookings',
    initialState,
    /* eslint-disable no-param-reassign */
    reducers: {
    },
    extraReducers: {
      [viewBookings.fulfilled]: (state, action) => {
        state.booking = action.payload;
      },
    },
    /* eslint-enable no-param-reassign */
  });

  export default bookingSlice.reducer;