import styled from 'styled-components';
import { flexbox, layout } from 'styled-system';
import { StyleProps } from './types';
import { multiplier } from "../constants";

export const Grid = styled.div<StyleProps>`
    display: grid;
    direction: rtl;
    grid-gap: 5px;
    height: 100vw;
    width: 100%;
    grid-template-columns: repeat(${multiplier}, 1fr);
    grid-template-rows: repeat(${multiplier}, 1fr);
    ${flexbox};
    ${layout};
`;
Grid.defaultProps = {
  padding: [2, 4],
  maxHeight: ['100vh', '70vh'],
  maxWidth: ['100vh', '70vh'],
};
