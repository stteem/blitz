import React from 'react';
import { Card, CardProps } from './card'; // Adjust the import path if necessary
import type { Meta, StoryObj } from '@storybook/react'; // Import Meta and StoryObj types

const meta: Meta<CardProps> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'], // Enable autodocs
  argTypes: {
    className: {
      control: 'text', // Allow customization of className
      description: 'Additional CSS classes for the card',
    },
    children: {
      control: 'text', // Allow customization of children content
      description: 'Content inside the card',
    },
  },
};

export default meta;

type Story = StoryObj<CardProps>; // Use StoryObj for typing

export const Default: Story = {
  args: {
    className: 'bg-white shadow-md rounded-lg p-4', // Example styles
    children: 'This is a default card.',
  },
};

export const WithHeader: Story = {
  args: {
    className: 'bg-white shadow-md rounded-lg p-4',
    children: (
      <>
        <h2 className="text-lg font-semibold">Card Header</h2>
        <p>This is a card with a header.</p>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    className: 'bg-white shadow-md rounded-lg p-4',
    children: (
      <>
        <p>This is a card with a footer.</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Action</button>
        </div>
      </>
    ),
  },
};

export const WithImage: Story = {
  args: {
    className: 'bg-white shadow-md rounded-lg p-4',
    children: (
      <>
        <img src="https://via.placeholder.com/150" alt="Placeholder" className="mb-4 rounded" />
        <p>This card contains an image.</p>
      </>
    ),
  },
};