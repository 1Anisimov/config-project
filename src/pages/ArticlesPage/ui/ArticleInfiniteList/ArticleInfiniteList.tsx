import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        return <Text text={t('Произошла непредвиденная ошибка')} />;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
    );
});
