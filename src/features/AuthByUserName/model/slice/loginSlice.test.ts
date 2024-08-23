import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUserName('Alexandr'))).toEqual({ username: 'Alexandr' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
});
