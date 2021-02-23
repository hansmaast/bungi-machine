import styled from 'styled-components';
import {
  layout, position, space, typography,
} from 'styled-system';
import { disableUserSelect } from './disableUserSelect';
import { StyleProps } from './types';

export const Button = styled.button<StyleProps & any>`
  border: 1px solid;
  border-radius: 4px;
  font-weight: "200";
  white-space: nowrap;
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
};
