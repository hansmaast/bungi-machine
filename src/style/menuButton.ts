import styled from 'styled-components';
import {
  layout, position, space, typography,
} from 'styled-system';
import { disableUserSelect } from './disableUserSelect';
import { StyleProps } from './types';

export const MenuButton = styled.button<StyleProps & any>`
  z-index: 10;
  background-color: ${({ isOpen }) => (isOpen ? 'black' : 'white')};;
  color: ${({ isOpen }) => (isOpen ? 'white' : 'black')};
  border: 1px solid;
  border-radius: 4px;
  ${disableUserSelect};
  ${position};
  ${space};
  ${typography};
  ${layout};
`;
MenuButton.defaultProps = {
  position: 'fixed',
  top: 0,
  left: 0,
  marginY: 3,
  marginX: [3, 4, 6],
  padding: [2],
  paddingX: 3,
  fontSize: 4,
};
