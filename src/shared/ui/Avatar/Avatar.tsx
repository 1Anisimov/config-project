import { CSSProperties, useMemo } from 'react';

import DefaultAvatar from '../../assets/icons/profile_default_img.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string | undefined;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, src, size = 100, alt, fallbackInverted,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const errorFallback = <Icon width={size} height={size} inverted={fallbackInverted} Svg={DefaultAvatar} />;
    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
};
