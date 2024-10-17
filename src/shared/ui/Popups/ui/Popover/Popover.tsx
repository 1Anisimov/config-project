import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        trigger,
        direction = 'bottom_right',
        children,
    } = props;

    const optionClasses = [
        mapDirectionClass[direction],
    ];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, optionClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
