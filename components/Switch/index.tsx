import * as React from 'react';
import type {
  Root, Thumb
} from '@radix-ui/react-switch';
import {
  StyledSwitch,
  StyledSwitchThumb,
} from './Switch.styled';

const Switch = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledSwitch
    ref={ref}
    {...props}
  />
));

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof Thumb>,
  React.ComponentPropsWithoutRef<typeof Thumb>
>((props, ref) => (
  <StyledSwitchThumb
    ref={ref}
    {...props}
  />
));

export {
  Switch,
  SwitchThumb,
}