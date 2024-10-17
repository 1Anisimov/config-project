import { memo } from 'react';

import { ArticleView } from '../../model/consts/articleConsts';

import ViewBigIcon from '@/shared/assets/icons/big_view_icon.svg';
import ViewSmallIcon from '@/shared/assets/icons/small_view_icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ViewBigIcon,
        id: 1,
    },
    {
        view: ArticleView.SMALL,
        icon: ViewSmallIcon,
        id: 2,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    className={cls.button}
                    key={viewType.id}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={
                            classNames('', { [cls.notSelected]: viewType.view !== view }, [])
                        }
                    />
                </Button>
            ))}
        </div>
    );
});
