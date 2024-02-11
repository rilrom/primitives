import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from '.';

/**
 * A succinct message that is displayed temporarily.
 *
 * https://www.radix-ui.com/primitives/docs/components/toast
 */
export default {
  title: 'Example/Toast',
  component: Toast,
  tags: ['autodocs'],
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
        <ToastClose asChild>
          <button>Close</button>
        </ToastClose>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
