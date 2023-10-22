import styled from 'styled-components';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const StyledAccordion = styled(Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &[data-orientation='horizontal'] {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledAccordionItem = styled(Item)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &[data-orientation='horizontal'] {
    flex-direction: row;
  }
`;

export const StyledAccordionHeader = styled(Header)`
  margin: 0;
`;

export const StyledAccordionChevron = styled(ChevronDownIcon)``;

export const StyledAccordionTrigger = styled(Trigger)`
  display: flex;

  &[data-state='open'] {
    > ${StyledAccordionChevron} {
      transform: rotate(180deg);
    }
  }
`;

export const StyledAccordionContent = styled(Content)``;

export const StyledAccordionContentText = styled.div``;
