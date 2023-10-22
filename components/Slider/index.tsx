import * as React from 'react';
import type {
  Root, Track, Range, Thumb
} from '@radix-ui/react-slider';
import {
  StyledSlider,
  StyledSliderTrack,
  StyledSliderRange,
  StyledSliderThumb,
} from './Slider.styled';

const Slider = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledSlider
    ref={ref}
    {...props}
  />
));

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof Track>,
  React.ComponentPropsWithoutRef<typeof Track>
>((props, ref) => (
  <StyledSliderTrack
    ref={ref}
    {...props}
  />
));

const SliderRange = React.forwardRef<
  React.ElementRef<typeof Range>,
  React.ComponentPropsWithoutRef<typeof Range>
>((props, ref) => (
  <StyledSliderRange
    ref={ref}
    {...props}
  />
));

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof Thumb>,
  React.ComponentPropsWithoutRef<typeof Thumb>
>((props, ref) => (
  <StyledSliderThumb
    ref={ref}
    {...props}
  />
));

export {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
};
