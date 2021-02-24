import styled from 'styled-components';
import { position } from 'styled-system';
import { StyleProps } from './types';

export const AppContainer = styled.div<StyleProps>`
  overflow-x: hidden;
  ${position}
`;
AppContainer.defaultProps = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};
