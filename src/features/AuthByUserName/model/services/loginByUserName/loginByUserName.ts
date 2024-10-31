import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

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

            dispatch(userActions.setAuthData(response.data));
            // extra.navigate?.('/about');

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
