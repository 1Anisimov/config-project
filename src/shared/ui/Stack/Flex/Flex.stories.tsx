import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, FlexProps } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

// direction

export const DirectionRow = Template.bind({});
DirectionRow.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    direction: 'row',
};
export const directionColumn = Template.bind({});
directionColumn.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    direction: 'column',
};

// align

export const alignCenter = Template.bind({});
alignCenter.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    direction: 'column',
    align: 'center',
};

export const alignEnd = Template.bind({});
alignEnd.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    direction: 'column',
    align: 'end',
};

// justify

export const justifyCenter = Template.bind({});
justifyCenter.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    justify: 'center',
};

export const justifyBetween = Template.bind({});
justifyBetween.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    justify: 'between',
};

// gap

export const Gap = Template.bind({});
Gap.args = {
    children: (
        <>
            <div>flex1</div>
            <div>flex2</div>
            <div>flex3</div>
            <div>flex4</div>
        </>
    ),
    gap: '16',
};
