import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    form?: Profile;
    readonly: boolean;
    validateError?: ValidateProfileErrors[];
}
