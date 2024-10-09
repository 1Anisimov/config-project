import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
    tabs: [
        {
            content: 'tab 1',
            value: 'tab 1',
        },
        {
            content: 'tab 2',
            value: 'tab 2',
        },
        {
            content: 'tab 3',
            value: 'tab 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            content: 'tab 1',
            value: 'tab 1',
        },
        {
            content: 'tab 2',
            value: 'tab 2',
        },
        {
            content: 'tab 3',
            value: 'tab 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {
    tabs: [
        {
            content: 'tab 1',
            value: 'tab 1',
        },
        {
            content: 'tab 2',
            value: 'tab 2',
        },
        {
            content: 'tab 3',
            value: 'tab 3',
        },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
