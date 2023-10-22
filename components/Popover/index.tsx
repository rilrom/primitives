import * as React from 'react';
import type {
  PopoverProps,
  Trigger,
  PopoverPortalProps,
  Content,
  Close,
} from '@radix-ui/react-popover';
import {
  StyledPopover,
  StyledPopoverTrigger,
  StyledPopoverPortal,
  StyledPopoverContent,
  StyledPopoverClose,
} from './Popover.styled';

const Popover = (props: PopoverProps) => <StyledPopover {...props} />;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledPopoverTrigger
    ref={ref}
    {...props}
  />
));

const PopoverPortal = (props: PopoverPortalProps) => (
  <StyledPopoverPortal {...props} />
);

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledPopoverContent
    ref={ref}
    {...props}
  />
));

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close>
>((props, ref) => (
  <StyledPopoverClose
    ref={ref}
    {...props}
  />
));

export { Popover, PopoverTrigger, PopoverPortal, PopoverContent, PopoverClose };
