import type { Meta, StoryObj } from '@storybook/react';
import ServicesOverview from '../components/ServicesOverview';

const meta: Meta<typeof ServicesOverview> = {
  title: 'Components/ServicesOverview',
  component: ServicesOverview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServicesOverview>;

export const Default: Story = {};