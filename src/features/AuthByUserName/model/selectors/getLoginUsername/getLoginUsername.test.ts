import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'alexandr',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('alexandr');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
