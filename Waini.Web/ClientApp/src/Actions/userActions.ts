import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../Common/UserCommon';

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
    }
);

export const addUser = createAsyncThunk<User, User>(
    'users/addUser',
    async (user) => {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error('Failed to add user');
        return response.json();
    }
);

export const updateUser = createAsyncThunk<User, User>(
    'users/updateUser',
    async (user) => {
        const response = await fetch(`/api/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error('Failed to update user');
        return response.json();
    }
);

export const deleteUser = createAsyncThunk<number, number>(
    'users/deleteUser',
    async (id) => {
        const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete user');
        return id;
    }
);
