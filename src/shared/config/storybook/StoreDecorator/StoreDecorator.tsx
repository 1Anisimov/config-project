import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import articleDetailsReducer from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addComentForm/model/slices/addComentFormSlice';
import loginReducer from 'features/AuthByUserName/model/slice/loginSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { scrollSaveReducer } from 'features/ScrollSave';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice/index';
import { profileReducer } from 'features/editableProfileCard';
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
