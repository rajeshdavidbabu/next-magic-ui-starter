import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Footer from '../components/Footer';

interface FooterArgs {
  backgroundColor?: string;
  textColor?: string;
}

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the footer',
    },
    textColor: {
      control: 'color',
      description: 'Text color in the footer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const CustomColors: Story = {
  args: {
    backgroundColor: '#f0f0f0',
    textColor: '#333333',
  },
  render: ((args: FooterArgs) => (
    <div style={{ backgroundColor: args.backgroundColor, color: args.textColor }}>
      <Footer />
    </div>
  )) as StoryFn<typeof Footer>,
};