import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
} from '.';

/**
 * Displays rich content in a portal, triggered by a button.
 *
 * https://www.radix-ui.com/primitives/docs/components/popover
 */
export default {
  title: 'Example/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    modal: {
      control: 'boolean',
      description:
        'The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as Meta<typeof Popover>;

const RootTemplate: StoryFn<typeof Popover> = args => {
  return (
    <Popover {...args}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          Content
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  modal: false,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
