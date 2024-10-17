import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

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

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
    theme: TextTheme.ERROR,
};

export const TextSizeL = Template.bind({});
TextSizeL.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
    size: TextSize.L,
};

export const TextSizeM = Template.bind({});
TextSizeM.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
    size: TextSize.M,
};

export const TextSizeS = Template.bind({});
TextSizeS.args = {
    title: 'Title Title Title',
    text: 'text text text text text',
    size: TextSize.S,
};
