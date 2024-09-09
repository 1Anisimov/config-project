import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        text: 'comment 1',
        user: {
            id: '1',
            username: 'User 1',
            avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment: {
        id: '1',
        text: 'comment 1',
        user: {
            id: '1',
            username: 'User 1',
            avatar: 'https://img.razrisyika.ru/kart/38/1200/151874-smeshariki-nyusha-36.jpg',
        },
    },
};
