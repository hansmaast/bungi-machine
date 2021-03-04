import styled from 'styled-components';
import {
  layout, position, space, typography,
} from 'styled-system';
import { disableUserSelect } from './disableUserSelect';
import { StyleProps } from './types';

type Props = {
  isSelected?: boolean;
  isSelectedLoop?: boolean;
}
export const Button = styled.button<StyleProps & Props>`
  border: 1px solid;
  border-radius: 4px;
  font-weight: "200";
  white-space: nowrap;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  transform: ${({ isSelected }) => (isSelected ? 'scale(1.15)' : '')};
  transition: transform 0.25s ease-out, background-color 0.05s ease-in;
  outline: ${({ isSelectedLoop }) => (isSelectedLoop ? 'solid 2px green' : '')};
  ${disableUserSelect};
  ${position};
  ${space};
  ${typography};
  ${layout};
`;
Button.defaultProps = {
  marginY: 3,
  mx: 2,
  padding: [2],
  paddingX: 3,
  fontSize: 3,
  type: 'button',
};
