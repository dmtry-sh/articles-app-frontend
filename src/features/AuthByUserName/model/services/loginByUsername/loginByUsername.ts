import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'appEntities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if ((response.status !== 200) || (!response.data)) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    }
)