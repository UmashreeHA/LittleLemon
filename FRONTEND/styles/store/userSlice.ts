import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  users: any[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const fetchUsers = () => async (dispatch: any) => {
  const response = await axios.get('/api/users');
  dispatch(setUsers(response.data));
};

export default userSlice.reducer;
