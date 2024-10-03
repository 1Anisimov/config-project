// import axios from 'axios';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../consts/consts';

jest.mock('axios');

// const mockedAxios = jest.mocked(axios, true);

const data = {
    first: 'Александр',
    lastname: 'Анисимов',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Ekaterinburg',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('without city', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_USERNAME,
        ]);
    });
});
