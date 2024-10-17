import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

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
