import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';

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
