import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from './Button';
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
Primary.args = {
    children: 'Button'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    variant: ButtonVariant.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button',
    variant: ButtonVariant.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.L
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE,
    size: ButtonSize.XL
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    variant: ButtonVariant.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({});
Background.args = {
    children: 'Button',
    variant: ButtonVariant.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    variant: ButtonVariant.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    variant: ButtonVariant.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};