import * as React from 'react';
import type { Root } from '@radix-ui/react-checkbox';
import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckIcon,
} from './Checkbox.styled';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledCheckbox
    ref={ref}
    {...props}
  >
    <StyledCheckboxIndicator>
      <StyledCheckIcon />
    </StyledCheckboxIndicator>
  </StyledCheckbox>
));

export { Checkbox };
