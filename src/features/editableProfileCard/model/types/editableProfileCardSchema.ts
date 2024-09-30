import { Profile } from 'entities/Profile';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    form?: Profile;
    readonly: boolean;
    validateError?: ValidateProfileErrors[];
}
