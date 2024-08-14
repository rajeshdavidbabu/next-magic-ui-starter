import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconCloud from '../components/IconCloud';

const meta: Meta<typeof IconCloud> = {
  title: 'Components/IconCloud',
  component: IconCloud,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof IconCloud>;

export const Default: Story = {};

export const CustomIcons: Story = {
  args: {
    icons: [
      { name: "Custom Icon 1", src: "https://via.placeholder.com/50" },
      { name: "Custom Icon 2", src: "https://via.placeholder.com/50" },
      { name: "Custom Icon 3", src: "https://via.placeholder.com/50" },
    ],
  },
};