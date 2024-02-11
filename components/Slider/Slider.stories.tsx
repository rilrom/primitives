import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slider, SliderTrack, SliderRange, SliderThumb } from '.';

/**
 * An input where the user selects a value from within a given range.
 *
 * https://www.radix-ui.com/primitives/docs/components/slider
 */
export default {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the slider.',
      table: { defaultValue: { summary: 'false' } },
    },
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the slider.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    dir: {
      control: 'inline-radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the slider. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
      table: { defaultValue: { summary: 'ltr' } },
    },
    inverted: {
      control: 'boolean',
      description: 'Whether the slider is visually inverted.',
      table: { defaultValue: { summary: 'false' } },
    },
    min: {
      control: 'number',
      description: 'The minimum value for the range.',
      table: { defaultValue: { summary: 0 } },
    },
    max: {
      control: 'number',
      description: 'The maximum value for the range.',
      table: { defaultValue: { summary: 100 } },
    },
    step: {
      control: 'number',
      description: 'The stepping interval.',
      table: { defaultValue: { summary: 1 } },
    },
    minStepsBetweenThumbs: {
      control: 'number',
      description: 'The minimum permitted steps between multiple thumbs.',
      table: { defaultValue: { summary: 0 } },
    },
  },
} as Meta<typeof Slider>;

const RootTemplate: StoryFn<typeof Slider> = args => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      {...args}
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </Slider>
  );
};

export const Root = RootTemplate.bind({});

Root.args = {
  disabled: false,
  orientation: 'horizontal',
  dir: 'ltr',
  inverted: false,
  min: 0,
  max: 100,
  step: 1,
  minStepsBetweenThumbs: 0,
};

Root.parameters = {
  controls: {
    include: Object.keys(Root.args),
  },
};
