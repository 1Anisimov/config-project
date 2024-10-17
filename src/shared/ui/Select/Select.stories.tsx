import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Label',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
        { value: '3', content: 'Третий пункт' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Label',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
        { value: '3', content: 'Третий пункт' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const KIDS = Template.bind({});
KIDS.args = {
    label: 'Label',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
        { value: '3', content: 'Третий пункт' },
    ],
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
