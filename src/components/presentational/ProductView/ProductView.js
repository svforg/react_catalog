import React from 'react';
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

export const ProductView = observer((
  {
    productTitle,
    productPrice,
    routerDomLink,
    routeLink,

  }
) => {
  return (
    <div>
      <h1>{productTitle}</h1>
      <hr/>
      <div>
        <strong>Price: {productPrice} &#36;</strong>
      </div>
      <hr/>

      <Link
        to={routeLink}
        className="btn btn-primary">
        Back to Catalog
      </Link>
    </div>
  );
});
