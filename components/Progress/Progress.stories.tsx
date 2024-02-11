import React, { useEffect } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Progress, ProgressIndicator } from '.';

/**
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 *
 * https://www.radix-ui.com/primitives/docs/components/progress
 */
export default {
  title: 'Example/Progress',
  component: Progress,
  tags: ['autodocs'],
} as Meta<typeof Progress>;

const RootTemplate: StoryFn<typeof Progress> = args => {
  const [progress, setProgress] = React.useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      {...args}
    >
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
