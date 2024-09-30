import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with loading: true', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with loading: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
