import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from '../../../Text/Text';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '100px' }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const PopoverLight = Template.bind({});
PopoverLight.args = {
    direction: 'bottom_right',
    trigger: <Button>Button</Button>,
    children: (
        <div style={{ width: '500px' }}>
            <Text theme={TextTheme.INVERTED} title="title 1" text="text 1" />
            <Text theme={TextTheme.INVERTED} title="title 2" text="text 2" />
            <Text theme={TextTheme.INVERTED} title="title 3" text="text 3" />
        </div>
    ),
};
