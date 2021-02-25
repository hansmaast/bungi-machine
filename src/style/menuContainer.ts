import styled, { css } from 'styled-components';
import {
  color, compose, flexbox, layout, position, space,
} from 'styled-system';
import { StyleProps } from './types';

const flexCenter = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Z_INDEX = {
  NAV_MENU: 100,
  NAV_MENU_BUTTON: 101,
  SETTINGS_MENU: 200,
  SETTINGS_MENU_BUTTON: 201,
};
export const MenuContainer = styled.div<StyleProps & any>`
  z-index: ${({ forSettings }) => (forSettings ? Z_INDEX.SETTINGS_MENU : Z_INDEX.NAV_MENU)};
  transform: ${({ isOpen, fromRight }) => (isOpen ? '' : `translateX(${fromRight ? '' : '-'}100%)`)};
  right: ${({ fromRight }) => (fromRight ? 0 : '')};
  transition: transform 0.1s ease-in-out;
  width: 100%;
  height: 100%;
  ${flexCenter}
  ${compose(
    position,
    space,
    layout,
    color,
    flexbox,
  )};
`;
MenuContainer.defaultProps = {
  position: 'fixed',
  flexDirection: 'column',
  maxWidth: ['100vw', '100vw', '100vw', '50vw'],
  paddingBottom: [3, 4],
};
