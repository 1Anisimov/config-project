import { memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    S = 'size_s',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string ;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.text, mods, [className])}>
            {title
                && (
                    <HeaderTag
                        className={cls.title}
                        data-testid={`${dataTestId}.Header`}
                    >
                        {title}
                    </HeaderTag>
                )}
            {text
            && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
