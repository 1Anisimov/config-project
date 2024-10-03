import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addComentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from 'shared/ui/Loader/Loader';
import { addComentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addComentForArticle(text));
    }, [dispatch]);

    return (

        <VStack gap="16" max className={className}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            {/* <Suspense fallback={<Loader />}> */}
            <AddCommentForm onSendComment={onSendComment} />
            {/* </Suspense> */}
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </VStack>
    );
});
