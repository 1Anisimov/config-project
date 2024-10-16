import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addComentForm/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { scrollSaveReducer } from '@/features/ScrollSave/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { ReducerList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addComentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
    scrollSave: scrollSaveReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
