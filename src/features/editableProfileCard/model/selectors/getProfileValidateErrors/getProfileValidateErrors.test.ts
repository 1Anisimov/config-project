import { ValidateProfileErrors } from '../../consts/consts';

import { getProfileValidateErrors } from './getProfileValidateErrors';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileValidateErrors.test', () => {
    test('should work with ValidateErrors: true', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_USER_DATA,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            [
                ValidateProfileErrors.SERVER_ERROR,
                ValidateProfileErrors.INCORRECT_USER_DATA,
            ],
        );
    });

    test('should work with ValidateErrors: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
