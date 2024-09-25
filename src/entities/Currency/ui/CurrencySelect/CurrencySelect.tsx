import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
        <ListBox
            onChange={onChangeHandler}
            className={className}
            items={selectOptionsCurrencyArray}
            value={value}
            defaultValue={t('Укажите валюту')}
            readonly={readonly}
            label={t('Укажите валюту')}
        />
    );
});
