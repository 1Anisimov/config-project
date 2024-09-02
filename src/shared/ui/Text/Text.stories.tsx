import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Title Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text text text text text',
};

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title Title Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'text text text text text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
    theme: TextTheme.ERROR,
};

export const KIDSTheme = Template.bind({});
KIDSTheme.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
};
KIDSTheme.decorators = [ThemeDecorator(Theme.KIDS)];
