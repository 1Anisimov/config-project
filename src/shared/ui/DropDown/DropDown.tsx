import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './DropDown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropDownItem {
    disabled?: boolean;
    onClick?: () => void;
    content?: ReactNode;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    top_left: cls.optionsTopLeft,
    bottom_left: cls.optionsBottomLeft,
    top_right: cls.optionsTopRight,
    bottom_right: cls.optionsBottomRight,
};

export function DropDown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom_right',
    } = props;

    const optionClasses = [
        mapDirectionClass[direction],
    ];
    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className])}>
            <Menu.Button className={cls.button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.items, {}, optionClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            key={index}
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
