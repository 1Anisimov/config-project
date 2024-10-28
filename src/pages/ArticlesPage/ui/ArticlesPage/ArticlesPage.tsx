import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useArticleItemById } from '../../model/selectors/articlePageSelectors';
import {
    fetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';

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
    const articleById = useArticleItemById('1');
    console.log(articleById);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <Page data-testid="ArticlesPage" onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.infiniteList} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
