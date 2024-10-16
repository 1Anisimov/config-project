import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './DropDown.module.scss';

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

export function DropDown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom_right',
    } = props;

    const optionClasses = [
        mapDirectionClass[direction],
    ];
    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.items, {}, optionClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            key={`DropDown-key${index}`}
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={`DropDown-key${index}`} as={AppLink} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={`DropDown-key${index}`} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
