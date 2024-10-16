import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
// import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
User,
LoginByUserNameProps,
ThunkConfig<string>
>(
    'login/loginByUserName',
    async (authData, thunkApi) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
        } = thunkApi;
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            // extra.navigate?.('/about');

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
