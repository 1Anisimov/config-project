import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddComentFormSchema } from '../types/addComentForm';

const initialState: AddComentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUserName.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUserName.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUserName.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;

// export default addCommentFormSReducer;
