import styled from 'styled-components';
import { Root, Image, Fallback } from '@radix-ui/react-avatar';

export const StyledAvatar = styled(Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export const StyledAvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const StyledAvatarFallback = styled(Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  color: white;
  font-size: 1rem;
  line-height: 1;
`;
