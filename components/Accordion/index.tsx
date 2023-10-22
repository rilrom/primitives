import * as React from 'react';
import type { Root, Item, Trigger, Content } from '@radix-ui/react-accordion';
import {
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionHeader,
  StyledAccordionTrigger,
  StyledAccordionChevron,
  StyledAccordionContent,
  StyledAccordionContentText,
} from './Accordion.styled';

const Accordion = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledAccordion
    ref={ref}
    {...props}
  />
));

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>((props, ref) => (
  <StyledAccordionItem
    ref={ref}
    {...props}
  />
));

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ children, ...props }, ref) => (
  <StyledAccordionHeader>
    <StyledAccordionTrigger
      ref={ref}
      {...props}
    >
      {children}
      <StyledAccordionChevron aria-hidden />
    </StyledAccordionTrigger>
  </StyledAccordionHeader>
));

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ children, ...props }, ref) => (
  <StyledAccordionContent
    ref={ref}
    {...props}
  >
    <StyledAccordionContentText>{children}</StyledAccordionContentText>
  </StyledAccordionContent>
));

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
