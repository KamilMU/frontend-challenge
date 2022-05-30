import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageNotFound from '../components/PageNotFound/PageNotFound';
import AllCats from '../containers/AllCats/AllCats';
import FavouriteCats from '../containers/FavouriteCats/FavouriteCats';
import HeaderContainer from '../containers/HeaderContainer/HeaderContainer';

export const navigation = (
  <Router>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={AllCats} />
      <Route exact path="/favourite_cats" component={FavouriteCats} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)