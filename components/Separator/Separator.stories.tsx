import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Separator } from '.';

export default {
  title: 'Example/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    decorative: {
      control: 'boolean',
    },
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
  },
} as Meta<typeof Separator>;

const RootTemplate: StoryFn<typeof Separator> = args => {
  return (
    <Separator decorative orientation="horizontal" {...args} />
  );
};

export const Root = RootTemplate.bind({});
Root.args = {
  decorative: true,
  orientation: 'horizontal',
};
