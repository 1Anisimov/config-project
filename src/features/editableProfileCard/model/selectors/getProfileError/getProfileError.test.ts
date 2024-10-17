import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError.test', () => {
    test('error', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
