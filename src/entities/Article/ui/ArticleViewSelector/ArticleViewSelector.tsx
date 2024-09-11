import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ViewBigIcon from 'shared/assets/icons/big_view_icon.svg';
import ViewSmallIcon from 'shared/assets/icons/small_view_icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ViewBigIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: ViewSmallIcon,
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
