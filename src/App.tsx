/* eslint-disable import/extensions */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavMenu } from './components/Menu';
import { SettingsMenu } from './components/SettingsMenu';
import GridGoon from './pages/GridGoon';
import HomePage from './pages/HomePage';
import RythmPage from './pages/RythmPage';
import { AppContainer } from './style/appContainer';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/rythm">
        <RythmPage />
      </Route>
      <Route path="/grid-goon">
        <GridGoon />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter basename="/bungi-machine">
      <AppContainer>
        <NavMenu />
        <SettingsMenu />
        <Routes />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
