import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should work with data', async () => {
        const data = {
            first: 'Александр',
            lastname: 'Анисимов',
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Ekaterinburg',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with data: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
