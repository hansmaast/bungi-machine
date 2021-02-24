import styled from 'styled-components';
import {
  compose, flexbox, layout, position, space, typography,
} from 'styled-system';
import { StyleProps } from './types';

export const Title = styled.h1<StyleProps>`
    ${compose(
    space,
    position,
    layout,
    flexbox,
    typography,
  )}
`;

Title.defaultProps = {
  marginBottom: 0,
};
