import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from '../components/home/home'

const routes = () => (
  <Switch>
    <Route
      exact path = '/'
      component={HomeComponent}
    />
  </Switch>
);

export default routes;