import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    },
    decorators: [RouterDecorator]
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
};

export const Red = Template.bind({});
Red.args = {
    children: 'Link',
    theme: AppLinkTheme.RED
};


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Link',
    theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
