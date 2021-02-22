import React, { useState } from "react";
import { MenuButton } from "../style/menuButton";
import { MenuContainer } from "../style/menuContainer";
import { StyledLink } from "../style/styledLink";

export function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const closeMenus = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <MenuButton isOpen={showMenu} onClick={closeMenus}>
        {showMenu ? "X" : "O"}
      </MenuButton>
      <MenuContainer isOpen={showMenu}>
        <MenuButton zIndex={25} left="" right={0} isOpen={showSettings} onClick={() => setShowSettings(!showSettings)}>
          {showSettings ? "X" : "|||"}
        </MenuButton>
        <MenuContainer flexWrap="wrap" zIndex={20} isOpen={showSettings} bg="gray">

        </MenuContainer>
        <StyledLink to="/rythm" onClick={closeMenus}>Riddm</StyledLink>
        <StyledLink to="/grid-goon" onClick={closeMenus}>Grid Goon</StyledLink>
      </MenuContainer>
    </>
  );
}
