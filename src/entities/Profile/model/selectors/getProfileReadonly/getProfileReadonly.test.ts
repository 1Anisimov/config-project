import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should work with readonly: true', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('should work with readonly: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
