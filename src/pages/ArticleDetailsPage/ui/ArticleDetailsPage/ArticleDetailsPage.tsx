import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader, ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>

                <ArticleDetailsPageHeader />
                <VStack max gap="16">
                    <ArticleDetails id={id} />
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        off={<Card>{t('Оценка статей скоро появится!')}</Card>}
                        on={<ArticleRating articleId={id} />}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
