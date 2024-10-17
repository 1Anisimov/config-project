import { ValidateProfileErrors } from '../consts/consts';

import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    form?: Profile;
    readonly: boolean;
    validateError?: ValidateProfileErrors[];
}
