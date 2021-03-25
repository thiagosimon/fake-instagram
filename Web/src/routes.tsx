import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './components/feed/feed';
import New from './components/new/new';


function Routes() {
    return (
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" exact component={New} />
      </Switch>
    );
}

export default Routes;
