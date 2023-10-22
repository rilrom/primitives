import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Label } from '.';

export default {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],
} as Meta<typeof Label>;

const RootTemplate: StoryFn<typeof Label> = args => {
  return (
    <Label {...args}>
      Text
    </Label>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};
