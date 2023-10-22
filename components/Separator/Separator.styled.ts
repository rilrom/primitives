import styled from 'styled-components';
import { Root } from '@radix-ui/react-separator';

export const StyledSeparator = styled(Root)`
  background-color: black;
  
  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation='vertical'] {
    height: auto;
    width: 1px;
  }
`;
