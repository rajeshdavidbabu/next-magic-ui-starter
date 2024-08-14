import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AnimatedShinyText from '../components/magicui/animated-shiny-text';
import { AnimatedShinyTextDemo } from '../components/AnimatedShinyTextDemo';

const meta: Meta<typeof AnimatedShinyText> = {
  title: 'Components/AnimatedShinyText',
  component: AnimatedShinyText,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    shimmerWidth: { control: { type: 'range', min: 50, max: 200, step: 10 } },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedShinyText>;

export const Default: Story = {
  args: {
    children: 'Animated Shiny Text',
    shimmerWidth: 100,
  },
};

export const CustomWidth: Story = {
  args: {
    children: 'Custom Shimmer Width',
    shimmerWidth: 150,
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a longer piece of text to demonstrate how the animation works with multiple lines.',
    shimmerWidth: 100,
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled Text',
    className: 'text-2xl font-bold text-blue-500',
    shimmerWidth: 100,
  },
};

export const DemoComponent: Story = {
  render: () => <AnimatedShinyTextDemo />,
};