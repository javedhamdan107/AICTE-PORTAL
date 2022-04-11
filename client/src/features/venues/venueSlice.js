import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { viewVenuesAPI } from './venueAPIs';

const initialState = { venue: null };

export const viewVenues = createAsyncThunk(
    'venues/viewVenues',
    async (thunkAPI) => {
      try {
        const result = await viewVenuesAPI();
        return result.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );

  export const venueSlice = createSlice({
    name: 'venues',
    initialState,
    /* eslint-disable no-param-reassign */
    reducers: {
    },
    extraReducers: {
      [viewVenues.fulfilled]: (state, action) => {
        state.venue = action.payload;
      },
    },
    /* eslint-enable no-param-reassign */
  });
  
  export default venueSlice.reducer;
  