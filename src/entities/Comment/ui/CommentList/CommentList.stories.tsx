import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
    comments: [
        {
            id: '1',
            text: 'comment 1',
            user: {
                id: '1',
                username: 'user 1',
                avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
            },
        },
        {
            id: '2',
            text: 'comment 2',
            user: {
                id: '2',
                username: 'user 2',
                avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comments: [
        {
            id: '1',
            text: 'comment 1',
            user: {
                id: '1',
                username: 'user 1',
                avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
            },
        },
        {
            id: '2',
            text: 'comment 2',
            user: {
                id: '2',
                username: 'user 2',
                avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
            },
        },
    ],
};
