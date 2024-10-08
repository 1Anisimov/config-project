import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <Text title="title" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="title" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {
    children: <Text title="title" text="text text" />,
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
