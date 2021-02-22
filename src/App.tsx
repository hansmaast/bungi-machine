import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GridGoon from "./pages/GridGoon";
import HomePage from "./pages/HomePage";
import RythmPage from "./pages/RythmPage";
import { StyledLink } from "./style/styledLink";
import { MenuContainer } from "./MenuContainer";
import { MenuButton } from "./MenuButton";
import { AppContainer } from "./style/appContainer";

function App() {  
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const closeMenus = () => {
    setShowMenu(!showMenu);
  }
  return (
    <BrowserRouter>
    <AppContainer>
      <MenuButton isOpen={showMenu} onClick={closeMenus}>
        {showMenu ? "X" : "O"}
      </MenuButton>
      <MenuContainer isOpen={showMenu} >
         <MenuButton zIndex={25} left="" right={0} isOpen={showSettings} onClick={() => setShowSettings(!showSettings)}>
            {showSettings ? "X" : "|||"}
          </MenuButton>
          <MenuContainer flexWrap="wrap" zIndex={20} isOpen={showSettings} bg="gray">
  
          </MenuContainer>
         <StyledLink to="/rythm" onClick={closeMenus}>Riddm</StyledLink>
         <StyledLink to="/grid-goon" onClick={closeMenus}>Grid Goon</StyledLink>
      </MenuContainer>
      <Switch>
        <Route exact path="/">
        <HomePage/>
        </Route>
        <Route path="/rythm">
          <RythmPage/>
        </Route>
        <Route path="/grid-goon">
          <GridGoon/>
        </Route>
      </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
