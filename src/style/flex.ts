import styled from 'styled-components';
import {
  border,
  color, flexbox, layout, position, space,
} from 'styled-system';
import { hideScrollBar } from './disableUserSelect';
import { StyleProps } from './types';

export const Flex = styled.div<StyleProps & any>`
  ${({ hideScrollbar }) => (hideScrollbar ? hideScrollBar : '')}
  ${space};
  ${layout};
  ${flexbox};
  ${color};
  ${position};
  ${border};
`;

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  p: 1,
};
