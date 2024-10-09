import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Light = Template.bind({});
Light.args = {
    onSendComment: action('onSendComment'),
};
Light.decorators = [
    StoreDecorator({
        addComentForm: {},
    }),
];

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};
Dark.decorators = [
    StoreDecorator({
        addComentForm: {},
    }),
    ThemeDecorator(Theme.DARK),
];

export const KIDS = Template.bind({});
KIDS.args = {
    onSendComment: action('onSendComment'),
};
KIDS.decorators = [
    StoreDecorator({
        addComentForm: {},
    }),
    ThemeDecorator(Theme.KIDS),
];
