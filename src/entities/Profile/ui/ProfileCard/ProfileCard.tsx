import { useTranslation } from 'react-i18next';

import { Profile } from '../../model/types/profile';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile | undefined;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
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
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editings]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack
                max
                justify="center"
                align="center"
                className={classNames(cls.profileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                max
                justify="center"
                align="center"
                className={classNames(cls.profileCard, {}, [className, cls.error])}
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.profileCard, mods, [className])}>

            {data?.avatar && (
                <HStack max justify="center">
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('Name')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.Firstname"

            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Last Name')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.Lastname"
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
            <CurrencySelect
                className={cls.select}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.select}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>

    );
};
