import styled from 'styled-components';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export const StyledCheckbox = styled(Root)`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCheckboxIndicator = styled(Indicator)``;

export const StyledCheckIcon = styled(CheckIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;
