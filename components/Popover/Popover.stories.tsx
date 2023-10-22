import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
} from '.';

export default {
  title: 'Example/Popover',
  component: Popover,
  tags: ['autodocs'],
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
Root.args = {};
