import * as React from 'react';
import type {
  Root, List, Trigger, Content
} from '@radix-ui/react-tabs';
import {
  StyledTabs,
  StyledTabsList,
  StyledTabsTrigger,
  StyledTabsContent,
} from './Tabs.styled';

const Tabs = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>((props, ref) => (
  <StyledTabs
    ref={ref}
    {...props}
  />
));

const TabsList = React.forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>((props, ref) => (
  <StyledTabsList
    ref={ref}
    {...props}
  />
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>((props, ref) => (
  <StyledTabsTrigger
    ref={ref}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>((props, ref) => (
  <StyledTabsContent
    ref={ref}
    {...props}
  />
));

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
}