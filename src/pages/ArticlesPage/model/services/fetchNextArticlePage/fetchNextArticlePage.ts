import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchNestArticlePage',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePageNum(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
