import { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

interface LoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
