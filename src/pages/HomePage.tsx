import React from 'react'
import { Flex } from '../style/box'
import { StyledLink } from '../style/styledLink'


export default function HomePage() {
    return (
        <Flex>
            <StyledLink to="grid-goon">Goons</StyledLink>
            <StyledLink to="rythm">Riddm</StyledLink>
        </Flex>
    )
}
