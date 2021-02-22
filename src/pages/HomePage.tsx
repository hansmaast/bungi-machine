import { Flex } from '../style/box';
import { StyledLink } from '../style/styledLink';

export default function HomePage() {
  return (
    <Flex>
      <StyledLink to="grid-goon">Grid Goon</StyledLink>
      <StyledLink to="rythm">Riddm</StyledLink>
    </Flex>
  );
}
