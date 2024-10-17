import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../model/consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: string;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            content: t('Все статьи'),
            value: ArticleType.ALL,
        },
        {
            content: t('Айти'),
            value: ArticleType.IT,
        },
        {
            content: t('Экономика'),
            value: ArticleType.ECONOMICS,
        },
        {
            content: t('Наука'),
            value: ArticleType.SCIENCE,
        },

    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            onTabClick={onTabClick}
            value={value}
        />
    );
});
