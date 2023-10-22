import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slider, SliderTrack, SliderRange, SliderThumb } from '.';

export default {
  title: 'Example/Slider',
  component: Slider,
  tags: ['autodocs'],
} as Meta<typeof Slider>;

const RootTemplate: StoryFn<typeof Slider> = args => {
  return (
    <Slider defaultValue={[50]} max={100} step={1} {...args}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </Slider>
  );
};

export const Root = RootTemplate.bind({});
Root.args = {};
