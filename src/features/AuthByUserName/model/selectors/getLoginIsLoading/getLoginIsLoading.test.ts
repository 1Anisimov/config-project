import { getLoginIsLoading } from './getLoginIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading.test', () => {
    test('Should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
