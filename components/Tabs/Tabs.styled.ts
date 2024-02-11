import styled from 'styled-components';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';

export const StyledTabs = styled(Root)`
  display: flex;

  &[data-orientation='horizontal'] {
    flex-direction: column;
  }
`;

export const StyledTabsList = styled(List)`
  display: flex;
  flex-shrink: 0;

  &[data-orientation='vertical'] {
    flexdirection: column;
  }
`;

export const StyledTabsTrigger = styled(Trigger)`
  flex-shrink: 0;

  &[data-state='active'] {
    text-decoration: underline;
  }
`;

export const StyledTabsContent = styled(Content)`
  flex-grow: 1;
`;
