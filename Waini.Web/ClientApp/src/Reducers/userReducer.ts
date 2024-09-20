import { createSlice } from '@reduxjs/toolkit';
import {
    fetchUsers,
    addUser,
    updateUser,
    deleteUser
} from '../Actions/userActions';
import { User } from '../Common/UserCommon';

interface UserState {
    loading: boolean;
    users: User[];
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    users: [],
    error: null
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index >= 0) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
    }
});

export default userSlice.reducer;
