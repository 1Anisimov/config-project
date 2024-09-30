import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import {
    articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import {
    fetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.infiniteList} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
