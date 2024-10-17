import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

// eslint-disable-next-line forses-plugin/layer-imports
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const ListBoxCurrency = Template.bind({});
ListBoxCurrency.args = {
    items: [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR, disabled: true },
        { value: Currency.USD, content: Currency.USD },
    ],
    value: Currency.RUB,
    defaultValue: 'Укажите валюту',
    readonly: false,
    label: 'Укажите валюту',
};

export const ListBoxReadonly = Template.bind({});
ListBoxReadonly.args = {
    items: [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR },
        { value: Currency.USD, content: Currency.USD },
    ],
    value: Currency.RUB,
    defaultValue: 'Укажите валюту',
    readonly: true,
    label: 'Укажите валюту',
};

export const Dark = Template.bind({});
Dark.args = {
    items: [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR, disabled: true },
        { value: Currency.USD, content: Currency.USD },
    ],
    value: Currency.RUB,
    defaultValue: 'Укажите валюту',
    readonly: false,
    label: 'Укажите валюту',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {
    items: [
        { value: Currency.RUB, content: Currency.RUB },
        { value: Currency.EUR, content: Currency.EUR, disabled: true },
        { value: Currency.USD, content: Currency.USD },
    ],
    value: Currency.RUB,
    defaultValue: 'Укажите валюту',
    readonly: false,
    label: 'Укажите валюту',
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
