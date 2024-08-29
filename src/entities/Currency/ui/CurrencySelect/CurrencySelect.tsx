import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (currency:Currency) => void;
    readonly?: boolean;
}

const selectOptionsCurrencyArray = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        value,
        onChange,
        className,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={selectOptionsCurrencyArray}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
