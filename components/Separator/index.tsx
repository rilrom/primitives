import * as React from 'react';
import type { Root } from '@radix-ui/react-separator';
import { StyledSeparator } from './Separator.styled';

const Separator = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledSeparator
    ref={ref}
    {...props}
  />
));

export { Separator };
