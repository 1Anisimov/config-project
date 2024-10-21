import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Light = Template.bind({});
Light.args = {
    src: 'https://i.pinimg.com/736x/a6/07/ed/a607ed16ab5479d95c7df913be51dde8.jpg',
};
