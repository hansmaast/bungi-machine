import styled from "styled-components";
import { StyleProps } from "./types";
import { disableUserSelect } from "./disableUserSelect";

export const GridItem = styled.button<StyleProps & any> `
    height: 100%;
    transition: all 0.15s;
    border: 1px solid;
    background-color: ${({ isTouched }) => isTouched ? "black" : "transparent"};
    border-radius: ${({ isTouched }) => isTouched ? "50%" : "5%"};
    ${disableUserSelect};
`;
