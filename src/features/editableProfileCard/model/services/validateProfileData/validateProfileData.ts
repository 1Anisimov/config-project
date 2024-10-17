import { ValidateProfileErrors } from '../../consts/consts';

import { Profile } from '@/entities/Profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }
    const {
        age, city, first, lastname, username,
    } = profile;
    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileErrors.INCORRECT_CITY);
    }

    if (!username) {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    return errors;
};
