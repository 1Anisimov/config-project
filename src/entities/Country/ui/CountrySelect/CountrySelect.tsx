import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country:Country) => void;
    readonly?: boolean;
}

const selectOptionsCountryArray = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        value,
        onChange,
        className,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={selectOptionsCountryArray}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
