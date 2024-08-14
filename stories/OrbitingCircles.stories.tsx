import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OrbitingCircles from '../components/magicui/orbiting-circles';
import { OrbitingCirclesDemo } from '../components/OrbitingCirclesDemo';
import StakeholderOrbitingLogos from '../components/StakeholderOrbitingLogos';
import { Icons } from '../components/Icons';

const meta: Meta<typeof OrbitingCircles> = {
  title: 'Components/OrbitingCircles',
  component: OrbitingCircles,
  argTypes: {
    reverse: { control: 'boolean' },
    duration: { control: { type: 'range', min: 5, max: 50, step: 1 } },
    delay: { control: { type: 'range', min: 0, max: 20, step: 1 } },
    radius: { control: { type: 'range', min: 50, max: 200, step: 10 } },
  },
};

export default meta;
type Story = StoryObj<typeof OrbitingCircles>;

export const Default: Story = {
  args: {
    children: <Icons.whatsapp />,
    className: "size-[30px] border-none bg-transparent",
    duration: 20,
    delay: 0,
    radius: 80,
  },
};

export const Reverse: Story = {
  args: {
    ...Default.args,
    reverse: true,
  },
};

export const CustomIcon: Story = {
  args: {
    ...Default.args,
    children: <Icons.gitHub />,
  },
};

export const LargerRadius: Story = {
  args: {
    ...Default.args,
    radius: 150,
  },
};

export const WithImage: Story = {
  args: {
    image: "/stakeholders logos/ehdsi_logo_en_0.png",
    duration: 20,
    delay: 0,
    radius: 80,
  },
};

export const FullDemo: StoryObj<typeof OrbitingCirclesDemo> = {
  render: () => <OrbitingCirclesDemo />,
};

export const StakeholderLogos: StoryObj<typeof StakeholderOrbitingLogos> = {
  render: () => <StakeholderOrbitingLogos />,
};