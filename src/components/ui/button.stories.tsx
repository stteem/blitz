import { Button, ButtonProps } from './button'; // Adjust the import path if necessary
import type { Meta, StoryObj } from '@storybook/react'; // Import Meta and StoryObj types
import { fn } from '@storybook/test'; // Import fn from @storybook/test

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered', // Set layout parameter to centered
  },
  tags: ['autodocs'], // Use tags for autodocs
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
    asChild: {
      control: {
        type: 'boolean',
      },
    },
    style: {
      control: 'color', // Allow background color customization
      description: 'Background color of the button',
    },
  },
  args: {
    onClick: fn(), // Set fn as the default onClick action
    size: 'default',
  },
};

export default meta;

type Story = StoryObj<ButtonProps>; // Use StoryObj for typing

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: 'Icon',
  },
}; 