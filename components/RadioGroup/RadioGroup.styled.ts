import styled from 'styled-components';
import { Root, Item, Indicator } from '@radix-ui/react-radio-group';

export const StyledRadioGroup = styled(Root)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &[data-orientation='horizontal'] {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledRadioGroupItem = styled(Item)`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 0;
  border-width: 1px;
  border-color: black;
  border-radius: 100%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRadioGroupIndicator = styled(Indicator)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: black;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-inline-start: 1rem;
`;
