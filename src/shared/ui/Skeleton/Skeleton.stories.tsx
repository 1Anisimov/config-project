import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    height: '200px',
    width: '100%',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    height: '100px',
    width: '100px',
};

export const NormalKids = Template.bind({});
NormalKids.args = {
    height: '200px',
    width: '100%',
};
NormalKids.decorators = [ThemeDecorator(Theme.KIDS)];

export const CircleKids = Template.bind({});
CircleKids.args = {
    border: '50%',
    height: '100px',
    width: '100px',
};
CircleKids.decorators = [ThemeDecorator(Theme.KIDS)];

export const NormalDark = Template.bind({});
NormalDark.args = {
    height: '200px',
    width: '100%',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    height: '100px',
    width: '100px',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
