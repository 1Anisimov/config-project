import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
})];

export const KIDS = Template.bind({});
KIDS.args = {};
KIDS.decorators = [ThemeDecorator(Theme.KIDS), StoreDecorator({
    user: { authData: {} },
})];

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};
LightNoAuth.decorators = [StoreDecorator({
    user: {},
})];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {};
DarkNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {},
})];

export const KidsNoAuth = Template.bind({});
KidsNoAuth.args = {};
KidsNoAuth.decorators = [ThemeDecorator(Theme.KIDS), StoreDecorator({
    user: {},
})];
