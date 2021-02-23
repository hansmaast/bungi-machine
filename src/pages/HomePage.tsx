import { Flex } from '../style/flex';
import { StyledLink } from '../style/styledLink';

export default function HomePage() {
  return (
    <Flex height="100%">
      <StyledLink to="grid-goon">Grid Goon</StyledLink>
      <StyledLink to="rythm">Riddm</StyledLink>
    </Flex>
  );
}
