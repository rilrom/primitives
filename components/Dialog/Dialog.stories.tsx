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

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 *
 * https://www.radix-ui.com/primitives/docs/components/dialog
 */
export default {
  title: 'Example/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    modal: {
      control: 'boolean',
      description:
        'The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
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

Root.args = {
  modal: true,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
