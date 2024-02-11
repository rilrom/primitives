import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '.';

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * https://www.radix-ui.com/primitives/docs/components/alert-dialog
 */
export default {
  title: 'Example/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
} as Meta<typeof AlertDialog>;

const RootTemplate: StoryFn<typeof AlertDialog> = args => {
  return (
    <AlertDialog {...args}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Example title</AlertDialogTitle>
            <AlertDialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              metus leo. Curabitur blandit, mauris ac imperdiet auctor, mauris
              enim lobortis ipsum, sed lacinia enim urna in orci.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
