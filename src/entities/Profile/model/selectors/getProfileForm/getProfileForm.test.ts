import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with form', async () => {
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
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with form: undefined', async () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
