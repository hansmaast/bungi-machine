import styled from 'styled-components';
import {
  compose,
  layout, position, space, typography,
} from 'styled-system';
import { disableUserSelect } from './disableUserSelect';
import { Z_INDEX } from './menuContainer';
import { StyleProps } from './types';

export const MenuButton = styled.button<StyleProps & any>`
  z-index: 10;
  background-color: ${({ isOpen }) => (isOpen ? 'black' : 'white')};;
  color: ${({ isOpen }) => (isOpen ? 'white' : 'black')};
  border: 1px solid;
  border-radius: 4px;
  z-index: ${({ forSettings }) => (forSettings ? Z_INDEX.SETTINGS_MENU_BUTTON : Z_INDEX.NAV_MENU_BUTTON)};;
  ${disableUserSelect};
  ${compose(
    position,
    space,
    typography,
    layout,
  )}
`;
MenuButton.defaultProps = {
  position: 'fixed',
  marginY: 3,
  marginX: [3, 4, 6],
  padding: [2],
  paddingX: 3,
  fontSize: 4,
};
