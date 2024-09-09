import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly
                        ? (
                            <Button
                                onClick={onEdit}
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    onClick={onCancelEdit}
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    onClick={onSaveEdit}
                                    className={cls.saveBtn}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Save')}
                                </Button>
                            </>
                        )}
                </div>
            )}

        </div>
    );
};
