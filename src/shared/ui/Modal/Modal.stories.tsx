import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quam!',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quam!',
    isOpen: true,
};

export const KIDS = Template.bind({});
KIDS.args = {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quam!',
    isOpen: true,
};
KIDS.decorators = [ThemeDecorator(Theme.KIDS)];
