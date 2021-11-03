import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const LoginLazy = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={LoginLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
