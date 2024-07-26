
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import HomePage from './pages/HomePage';
import CustomizationPage from './pages/CustomizationPage';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/customize" component={CustomizationPage} />
      </Switch>
    </Router>
  );
};

export default App;
