import styled from 'styled-components';
import {
  color, flexbox, layout, position, space,
} from 'styled-system';
import { StyleProps } from './types';

export const MenuContainer = styled.div<StyleProps & any>`
 transform: ${(props) => (props.isOpen ? '' : 'translateX(-100%)')};
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
 ${position};
  ${space};
  ${layout};
  ${color};
  ${flexbox};
`;
MenuContainer.defaultProps = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  maxWidth: ['100vw', '50vw'],
};
