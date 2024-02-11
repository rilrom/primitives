import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Label } from '.';

/**
 * Renders an accessible label associated with controls.
 *
 * https://www.radix-ui.com/primitives/docs/components/label
 */
export default {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],
} as Meta<typeof Label>;

const RootTemplate: StoryFn<typeof Label> = args => {
  return <Label {...args}>Text</Label>;
};

export const Root = RootTemplate.bind({});

Root.args = {};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
