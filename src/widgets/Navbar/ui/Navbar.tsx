import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getUserAuthData,
} from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropDown } from '@/features/avatarDropDown';
import { NotificationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShow = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appLogo} theme={TextTheme.INVERTED} title={t('Project o_0')} />
                <AppLink className={cls.createLink} theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
                    {t('Создать статью')}
                </AppLink>
                <HStack align="center" gap="16" className={cls.actions}>
                    <NotificationButton className={cls.NotificationButton} />
                    <AvatarDropDown />
                </HStack>

            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShow}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal onClose={onClose} isOpen={isAuthModal} />}
        </header>
    );
});
