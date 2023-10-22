import * as React from 'react';
import type {
  Root,
  Indicator,
} from '@radix-ui/react-progress';
import {
  StyledProgress,
  StyledProgressIndicator,
} from './Progress.styled';

const Progress = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledProgress
    ref={ref}
    {...props}
  />
));

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof Indicator>,
  React.ComponentPropsWithoutRef<typeof Indicator>
>((props, ref) => (
  <StyledProgressIndicator
    ref={ref}
    {...props}
  />
));

export { Progress, ProgressIndicator };
