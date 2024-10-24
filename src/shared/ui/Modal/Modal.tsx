import {
    ReactNode,
} from 'react';

import { classNames, Mods } from '../../lib/classNames/classNames';
import { useModal } from '../../lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;

    const { isClosing, close, isMounted } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
