import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: 'возрастанию',
        },
        {
            value: 'desc',
            content: 'убыванию',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: 'дате создания',
        },
        {
            value: ArticleSortField.TITLE,
            content: 'заголовку',
        },
        {
            value: ArticleSortField.VIEW,
            content: 'кол-ву просмотров',
        },
    ], []);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                value={order}
                options={orderOptions}
                label={t('по')}
                onChange={onChangeOrder}
            />

        </div>
    );
});
