import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
// TODO STORYBOOK
export default {
    title: 'shared/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
