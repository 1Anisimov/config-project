import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './ListBox.module.scss';
// import CheckIcon from '../../assets/icons/check_icon.svg';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export type DropdownDirection = 'top' | 'bottom';

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top: cls.optionsTop,
    bottom: cls.optionsBottom,
};

export function ListBox(props: ListBoxProps) {
    const {
        className, items, value, defaultValue, onChange, readonly, label, direction = 'bottom',
    } = props;

    const optionClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HStack gap="8" align="center">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button disabled={readonly} className={cls.button}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    }, [])}
                                >
                                    {/* {selected && <CheckIcon className={cls.icon} />} */}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
