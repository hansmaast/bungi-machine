import { useState } from 'react';
import { MenuButton } from '../style/menuButton';
import { MenuContainer } from '../style/menuContainer';
import { StyledLink } from '../style/styledLink';

export function NavMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <MenuButton isOpen={showMenu} onClick={toggleMenu}>
        {showMenu ? '𝗫' : 'O'}
      </MenuButton>
      <MenuContainer isOpen={showMenu} bg="white" justifyContent="center">
        <StyledLink to="/rythm" onClick={toggleMenu}>Drum Seq</StyledLink>
        {/* <StyledLink to="/grid-goon" onClick={toggleMenu}>Grid Goon</StyledLink> */}
      </MenuContainer>
    </>
  );
}
