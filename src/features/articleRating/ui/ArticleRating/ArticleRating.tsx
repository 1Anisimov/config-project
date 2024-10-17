import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId });
    const rating = data?.[0];

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId,
                rate: starsCount,
                userId: userData?.id ?? '',
                feedback,
            });
        } catch (error) {
            console.log('error', error);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton height={140} width="100%" />;
    }

    return (
        <RatingCard
            className={className}
            feedbackTitle={t('Оставьте свой отзыв, это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            title={t('Оцените статью')}
        />

    );
});

export default ArticleRating;
