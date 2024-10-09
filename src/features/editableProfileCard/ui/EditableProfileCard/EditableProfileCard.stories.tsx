import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            id: '2',
            first: 'Сергей',
            lastname: 'Бурунов',
            age: 50,
            currency: Currency.EUR,
            country: Country.Belarus,
            city: 'Moscow',
            username: 'user',
            avatar: 'https://i.pinimg.com/736x/a6/07/ed/a607ed16ab5479d95c7df913be51dde8.jpg',
        },
    },
})];
