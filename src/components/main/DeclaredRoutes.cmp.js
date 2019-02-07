import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Index } from '@/pages/index';
import Error404Handler from '@/components/404/Error404.cmp';

const DeclaredRoutes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route component={Error404Handler} />
  </Switch>
);

export default DeclaredRoutes;
