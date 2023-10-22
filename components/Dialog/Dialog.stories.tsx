import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '.';

export default {
  title: 'Example/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} as Meta<typeof Dialog>;

const RootTemplate: StoryFn<typeof Dialog> = args => {
  return (
    <Dialog {...args}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Example title</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              metus leo. Curabitur blandit, mauris ac imperdiet auctor, mauris
              enim lobortis ipsum, sed lacinia enim urna in orci.
            </DialogDescription>
            <DialogClose>Close</DialogClose>
          </DialogHeader>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};
