import { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { ACTIONS } from '../context/reducer';
import { MenuButton } from '../style/menuButton';
import { MenuContainer } from '../style/menuContainer';
import { StyledLink } from '../style/styledLink';

export function Menu() {
  const { state, dispatch } = useGlobalState();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  console.log(state);

  const toggleMenu = () => {
    dispatch({ type: ACTIONS.SET_ACTIVE_EIGHT_STEP, payload: 'YES' });
    setShowMenu(!showMenu);
  };
  return (
    <>
      <MenuButton isOpen={showMenu} onClick={toggleMenu}>
        {showMenu ? 'X' : 'O'}
      </MenuButton>
      <MenuContainer isOpen={showMenu}>
        <MenuButton zIndex={25} left="" right={0} isOpen={showSettings} onClick={() => setShowSettings(!showSettings)}>
          {showSettings ? 'X' : '|||'}
        </MenuButton>
        <MenuContainer flexWrap="wrap" zIndex={20} isOpen={showSettings} bg="gray" />
        <StyledLink to="/rythm" onClick={toggleMenu}>Riddm</StyledLink>
        <StyledLink to="/grid-goon" onClick={toggleMenu}>Grid Goon</StyledLink>
      </MenuContainer>
    </>
  );
}
