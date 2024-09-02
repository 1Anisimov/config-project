import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
// import Avatar from 'shared/assets/icons/smesharik-nusha.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Александр',
        lastname: 'Анисимов',
        age: 22,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Ekaterinburg',
        username: 'admin',
        avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const WithIsLoading = Template.bind({});
WithIsLoading.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        first: 'Александр',
        lastname: 'Анисимов',
        age: 22,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Ekaterinburg',
        username: 'admin',
        avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {
    data: {
        first: 'Александр',
        lastname: 'Анисимов',
        age: 22,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Ekaterinburg',
        username: 'admin',
        avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
    },
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
