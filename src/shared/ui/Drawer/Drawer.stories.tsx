import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './Drawer';
import { VStack } from '../Stack';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: (
        <VStack gap="16">
            <div style={{ color: 'white' }}>
                <h2>title 1</h2>
                <p>text 1</p>
            </div>
            <div style={{ color: 'white' }}>
                <h2>title 2</h2>
                <p>text 2</p>
            </div>
            <div style={{ color: 'white' }}>
                <h2>title 3</h2>
                <p>text 3</p>
            </div>

        </VStack>
    ),
    isOpen: true,
};
