import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile | undefined;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editings]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>

            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Name')}
                    onChange={onChangeFirstname}
                    readonly={readonly}

                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Last Name')}
                    onChange={onChangeLastname}
                    readonly={readonly}

                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('City')}
                    onChange={onChangeCity}
                    readonly={readonly}

                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    readonly={readonly}

                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    onChange={onChangeAvatar}
                    readonly={readonly}

                />
            </div>
        </div>
    );
};
