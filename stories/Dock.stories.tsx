import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dock from '../components/Dock';

const meta: Meta<typeof Dock> = {
  title: 'Components/Dock',
  component: Dock,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dock>;

export const Default: Story = {
  render: () => <Dock />,
};

export const WithCustomWidth: Story = {
  render: () => (
    <div style={{ width: '600px' }}>
      <Dock />
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <Dock />
    </div>
  ),
};