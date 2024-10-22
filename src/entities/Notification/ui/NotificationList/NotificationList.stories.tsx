import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [
    StoreDecorator({}),
];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    userId: '1',
                    description: 'Новая оценка!',
                    title: 'Оценил вашу статью',
                },
                {
                    id: '2',
                    userId: '1',
                    description: 'Новая оценка!',
                    title: 'Оценил вашу статью',
                },
                {
                    id: '3',
                    userId: '1',
                    description: 'Новая оценка!',
                    title: 'Оценил вашу статью',
                },
            ],
        },
    ],
};
