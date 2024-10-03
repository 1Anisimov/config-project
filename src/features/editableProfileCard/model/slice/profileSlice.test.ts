import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileErrors } from '../../model/consts/consts';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const data = {
    first: 'Александр',
    lastname: 'Анисимов',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Ekaterinburg',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '1' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123' }))).toEqual({
            form: { username: '123' },
        });
    });

    test('set update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('set update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileErrors.SERVER_ERROR],
            readonly: false,
            data: undefined,
            form: undefined,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            data,
            form: data,
        });
    });
});
