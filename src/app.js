import React from 'react';
import {Provider} from 'mobx-react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import {routes, routesMap} from '~/routes/routes';
import css from "~/app.module.scss";
import stores from '~s/rootStore';

const App = () => {

  const routesComponents = Array.isArray(routes) && routes.map(route =>
    <Route
      path={route.url}
      key={route.url}
      exact={route.exact}
      component={route.component}/>);

  return <Provider stores={stores}>
    <BrowserRouter basename="/react_catalog">
      <div className={css.siteInner}>
        <header className={css.pageHeader}>
          <nav className="container">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <NavLink to={routesMap.catalog} className="nav-link">Catalog</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={routesMap.cart} className="nav-link">Cart</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to={routesMap.order} className="nav-link">Order Now</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <div className="container">
          <Switch>{routesComponents}</Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
};

export default App;

