import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FUIHeroSectionWithLogoClouds from '../components/FUIHeroSectionWithLogoClouds';

export default {
  title: 'Components/FUIHeroSectionWithLogoClouds',
  component: FUIHeroSectionWithLogoClouds,
} as Meta;

const Template: StoryFn = (args: any) => <FUIHeroSectionWithLogoClouds {...args} />;

export const Default = Template.bind({});
Default.args = {};