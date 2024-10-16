import { memo } from 'react';

import { IComment } from '../../model/types/comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton className={cls.username} width={100} height={30} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>

        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack align="center" max gap="8">
                    {
                        comment?.user.avatar
                            ? <Avatar size={30} src={comment?.user.avatar} />
                            : null
                    }

                    <Text title={comment?.user.username} />
                </HStack>
            </AppLink>

            <Text text={comment?.text} />
        </VStack>
    );
});
