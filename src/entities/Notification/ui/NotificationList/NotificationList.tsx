import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.NotificationList, {}, [className])}
                gap="16"
                max
            >
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames(cls.NotificationList, {}, [className])}
            gap="16"
            max
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
