import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <LightIcon className={cls.svgColor} />
        </Button>
    );
});
