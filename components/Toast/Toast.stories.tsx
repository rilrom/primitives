import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from '.';

export default {
  title: 'Example/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
    activationMode: {
      control: 'inline-radio',
      options: ['automatic', 'manual'],
    },
  },
} as Meta<typeof Toast>;

const RootTemplate: StoryFn<typeof Toast> = args => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider {...args}>
      <button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Open Toast
      </button>
      <Toast
        open={open}
        onOpenChange={setOpen}
      >
        <ToastTitle>Toast title</ToastTitle>
        <ToastDescription>Toast description</ToastDescription>
        <ToastClose
          asChild
        >
          <button>Close</button>
        </ToastClose>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};
