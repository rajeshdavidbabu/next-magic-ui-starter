import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FAQ from '../components/FAQ';

const meta: Meta<typeof FAQ> = {
  title: 'Components/FAQ',
  component: FAQ,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Default: Story = {};