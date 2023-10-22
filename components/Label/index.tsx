import * as React from 'react';
import type {
  Root
} from '@radix-ui/react-label';
import {
  StyledLabel,
} from './Label.styled';

const Label = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledLabel
    ref={ref}
    {...props}
  />
));

export {
  Label,
};
