import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        autoFocus,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e?.target?.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <HStack max className={classNames('', mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                className={cls.input}
                onChange={onChangeHandler}
                type={type}
                value={value}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={autoFocus}
                readOnly={readonly}
                {...otherProps}
            />
        </HStack>
    );
});
