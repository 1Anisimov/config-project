import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<
    User,
    void,
    ThunkConfig<string>
>('user/initAuthData', async (newJsonSettings, thunkApi) => {
    const {
        rejectWithValue,
        dispatch,
    } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            getUserDataByIdQuery(userId),
        ).unwrap();

        return response;
    } catch (error) {
        console.log('error');
        return rejectWithValue('');
    }
});
