import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services/BaseService';

const apiService = new ApiService();

export const getCurrentUserInfo = createAsyncThunk(
  'getCurrentUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get('/todos');
      return response.data;
    } catch (error) {
      return rejectWithValue;
    }
  },
);

export const profilePageSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [getCurrentUserInfo.pending]: (state) => {
      state.status = 'loading';
    },

    [getCurrentUserInfo.fulfilled]: (state, action) => {
      state.users = [...action.payload];

      state.status = 'succeeded';
    },
    [getCurrentUserInfo.rejected]: (state) => {
      state.users = [];
      state.status = 'failed';
    },
  },
});

export default profilePageSlice.reducer;
