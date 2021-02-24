import styled, { css } from 'styled-components';
import { layout, space } from 'styled-system';
import { StyleProps } from './types';

const devider = 5;
const thumbHeigth = 24;
const trackHeight = thumbHeigth / devider;
const offsetY = 50 - 50 / devider;

const standardBorder = css`
    border: 1px solid black;
`;
const standardBorderRadius = css`
    border-radius: 4px;
`;
const thumbStyle = css`
    ${standardBorder}
    border-radius: 50%;
    width: ${thumbHeigth}px;
    height: ${thumbHeigth}px;
    transform: translateY(${-offsetY}%);
    background: white;
`;
const trackStyle = css`
    background: black;
    ${standardBorderRadius}
    height: ${trackHeight}px;
`;
const sliderStyle = css`
    &::-webkit-slider-runnable-track {
        ${trackStyle};
    }
    &::-moz-range-track {
        ${trackStyle};
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${thumbStyle}
    }
    &::-moz-range-thumb {
        ${thumbStyle}
    }
    &:focus {
        outline: none;
    }
`;
export const StyledSlider = styled.input<StyleProps>`
    ${standardBorderRadius}    
    ${standardBorder}
    ${sliderStyle};
    ${space};
    ${layout};
`;
StyledSlider.defaultProps = {
  margin: 2,
  paddingX: 3,
  paddingY: 3,
  width: '100vw',
  maxWidth: 400,
};
