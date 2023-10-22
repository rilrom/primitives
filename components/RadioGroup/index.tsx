import * as React from 'react';
import type {
  Root,
  Item,
  Indicator,
} from '@radix-ui/react-radio-group';
import {
  StyledRadioGroup,
  StyledRadioGroupItem,
  StyledRadioGroupIndicator,
} from './RadioGroup.styled';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledRadioGroup
    ref={ref}
    {...props}
  />
));

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>((props, ref) => (
  <StyledRadioGroupItem
    ref={ref}
    {...props}
  />
));

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof Indicator>,
  React.ComponentPropsWithoutRef<typeof Indicator>
>((props, ref) => (
  <StyledRadioGroupIndicator
    ref={ref}
    {...props}
  />
));

export { RadioGroup, RadioGroupItem, RadioGroupIndicator };
