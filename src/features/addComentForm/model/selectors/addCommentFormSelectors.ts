import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormSelectorsText = (state: StateSchema) => state.addComentForm?.text;
export const getCommentFormSelectorsError = (state: StateSchema) => state.addComentForm?.error;
