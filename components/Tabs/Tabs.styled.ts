import styled from 'styled-components';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

export const StyledTabs = styled(Root)``;

export const StyledTabsList = styled(List)``;

export const StyledTabsTrigger = styled(Trigger)`
  &[data-state="active"] {
    text-decoration: underline;
  }
`;

export const StyledTabsContent = styled(Content)``;
