import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '~/routes/routes';

export const Error404 = () => {
  return (
    <>
      <h1>Ooops!</h1>

      <div className="alert alert-warning">
        <p>Page not found!</p>

        <p>Go to &nbsp; <Link to={routesMap.catalog}>home page &rarr;</Link></p>
      </div>
    </>
  );
};
