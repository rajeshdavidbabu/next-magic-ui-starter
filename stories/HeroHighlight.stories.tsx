import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeroHighlight } from '../components/HeroHighlight';

export default {
  title: 'Components/HeroHighlight',
  component: HeroHighlight,
} as Meta;

const Template: StoryFn = (args) => <HeroHighlight {...args} />;

export const Default = Template.bind({});
Default.args = {};