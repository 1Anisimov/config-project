import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
    blocks: [],
    createdAt: '10.03.2002',
    id: '1',
    img: 'https://i.pinimg.com/originals/2a/e1/8a/2ae18a66f89f1dc3fff96203288fcb64.png',
    subtitle: '',
    title: 'JavaScript',
    type: [],
    user: { id: '1', username: 'user-1' },
    views: 100,
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        addComentForm: {},
    }),
];
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
