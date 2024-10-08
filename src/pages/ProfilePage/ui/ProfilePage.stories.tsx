import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Александр',
            lastname: 'Анисимов',
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Ekaterinburg',
            username: 'admin',
            avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
        },
        readonly: true,
    },
    scrollSave: {
        scroll: {},
    },

})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Александр',
            lastname: 'Анисимов',
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Ekaterinburg',
            username: 'admin',
            avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
        },
        readonly: true,
    },
    scrollSave: {
        scroll: {},
    },
})];

export const KIDS = Template.bind({});
KIDS.args = {

};
KIDS.decorators = [ThemeDecorator(Theme.KIDS), StoreDecorator({
    profile: {
        form: {
            first: 'Александр',
            lastname: 'Анисимов',
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Ekaterinburg',
            username: 'admin',
            avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
        },
        readonly: true,
    },
    scrollSave: {
        scroll: {},
    },
})];
