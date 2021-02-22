import styled from "styled-components";
import { color, flexbox, layout, position, space } from "styled-system";
import { StyleProps } from "./types";

export const Flex = styled.div<StyleProps>(
    space,
    layout,
    flexbox,
    color,
    position,
)

Flex.defaultProps = {
    height: "100%", 
        display: "flex", 
        flexDirection:"column", 
        alignItems: "center", 
        justifyContent: "center", 
        flexWrap: "wrap",
    p: 1,
}