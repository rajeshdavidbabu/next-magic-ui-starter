import type { Meta, StoryObj } from '@storybook/react';
import AboutUsPreview from '../components/AboutUsPreview';

const meta: Meta<typeof AboutUsPreview> = {
  title: 'Components/AboutUsPreview',
  component: AboutUsPreview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutUsPreview>;

export const Default: Story = {};