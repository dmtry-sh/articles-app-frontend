import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonVariant } from './Button';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [ThemeDecorator(Theme.DARK)]
Primary.args = {
    children: 'Button'
};

export const Clear = Template.bind({});
Clear.decorators = [ThemeDecorator(Theme.DARK)]
Clear.args = {
    children: 'Button',
    variant: ButtonVariant.CLEAR
};

export const Outline = Template.bind({});
Outline.decorators = [ThemeDecorator(Theme.LIGHT)]
Outline.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
