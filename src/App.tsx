/* eslint-disable import/extensions */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import GridGoon from './pages/GridGoon';
import HomePage from './pages/HomePage';
import RythmPage from './pages/RythmPage';
import { AppContainer } from './style/appContainer';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Menu />
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
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
