import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GoogleGeminiEffectDemo } from '../components/GoogleGeminiEffectDemo';

const meta: Meta<typeof GoogleGeminiEffectDemo> = {
  title: 'Components/GoogleGeminiEffect',
  component: GoogleGeminiEffectDemo,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof GoogleGeminiEffectDemo>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    title: "DigiMedic",
    description: "Digitální páteř Vaší praxe",
  },
};

// Dekorátor pro simulaci scrollu
const ScrollSimulator = (Story: any) => (
  <div style={{ height: '200vh', overflowY: 'auto' }}>
    <Story />
  </div>
);

meta.decorators = [ScrollSimulator];