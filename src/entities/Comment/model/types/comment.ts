import { User } from '../../../User/model/types/user';

export interface IComment {
    id: string;
    text: string;
    user: User;
}
