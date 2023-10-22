import * as React from 'react';
import type { Root, Trigger, Content } from "@radix-ui/react-collapsible";
import { StyledCollapsible, StyledCollapsibleTrigger, StyledCollapsibleContent } from './Collapsible.styled';

const Collapsible = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledCollapsible
    ref={ref}
    {...props}
  />
));

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledCollapsibleTrigger
    ref={ref}
    {...props}
  />
));

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledCollapsibleContent
    ref={ref}
    {...props}
  />
));

export { Collapsible, CollapsibleTrigger, CollapsibleContent };