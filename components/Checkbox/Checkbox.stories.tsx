import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Checkbox,
} from '.';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<typeof Checkbox>;

const RootTemplate: StoryFn<typeof Checkbox> = args => {
  return <Checkbox {...args} />;
};

export const Root = RootTemplate.bind({});
Root.args = {
  id: 'example',
  value: 'example',
  disabled: false,
};
