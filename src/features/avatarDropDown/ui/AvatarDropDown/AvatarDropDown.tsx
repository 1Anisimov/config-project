import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown } from '@/shared/ui/Popups';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropDown = memo((props: AvatarDropDownProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <DropDown
            direction="bottom_left"
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [{ content: t('Админка'), href: RoutePath.admin_panel }]
                    : []),
                { content: t('Профиль'), href: RoutePath.profile + authData.id },
                { content: t('Выйти'), onClick: onLogout },

            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />

    );
});
