import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { DropDown } from './DropDown';

export default {
    title: 'shared/Popups/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open</Button>,
    items: [
        { content: '1111' },
        { content: '1111' },
        { content: '1111' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom_left',
    trigger: <Button>Open</Button>,
    items: [
        { content: '1111' },
        { content: '1111' },
        { content: '1111' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top_left',
    trigger: <Button>Open</Button>,
    items: [
        { content: '1111' },
        { content: '1111' },
        { content: '1111' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top_right',
    trigger: <Button>Open</Button>,
    items: [
        { content: '1111' },
        { content: '1111' },
        { content: '1111' },
    ],
};
