import { Link } from 'react-router-dom';
import styled, { DefaultTheme, ThemedStyledInterface } from 'styled-components';
import { color, space } from 'styled-system';

type StyledTypes = ThemedStyledInterface<DefaultTheme> & any;
export const StyledLink: StyledTypes = styled(Link)`
    background-color: black;
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
    &:focus, :hover {
        transform: scale(1.2);
        box-shadow: 0px 0px 30px 30px rgba(250,250,250, 0.4) inset, 0px 0px 20px 10px rgba(250, 250,250, 0.7);
    };
    ${space};
    ${color};
`;

StyledLink.defaultProps = {
  padding: 5,
  m: 3,

};
