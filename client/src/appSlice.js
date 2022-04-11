import { createSlice } from '@reduxjs/toolkit';

const initialState = { appToast: {} };

const prepareToast = (toast) => {
  const defaultToast = { payload: {} };

  if (!toast) {
    return defaultToast;
  }

  if (toast && typeof toast === 'string') {
    defaultToast.payload.message = toast;
    return defaultToast;
  }

  defaultToast.payload = toast;
  return defaultToast;
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    showAppToast: {
      reducer: (state, action) => {
        state.appToast = action.payload;
      },
      prepare: prepareToast,
    },
  },
  extraReducers: {},
  /* eslint-enable no-param-reassign */
});

export const { showAppToast } = appSlice.actions;
export const hideAppToast = () => showAppToast(false); // makeHideAppToast

export default appSlice.reducer;
