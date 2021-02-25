import styled from 'styled-components';
import {
  color,
  compose, flexbox, grid, layout,
} from 'styled-system';
import { StyleProps } from './types';
import { multiplier } from '../constants';

export const Grid = styled.div<StyleProps & any>`
    display: grid;
    direction: ${({ reverse }) => (reverse ? 'rtl' : '')};
    grid-template-columns: repeat(${multiplier}, 1fr);
    grid-template-rows: repeat(${multiplier}, 1fr);
    ${compose(
    flexbox,
    layout,
    grid,
    color,
  )}
`;
Grid.defaultProps = {
  padding: [2, 4],
  gridGap: '5px',
  maxHeight: ['100vh', '70vh'],
  maxWidth: ['100vh', '70vh'],
  width: '100%',
};
