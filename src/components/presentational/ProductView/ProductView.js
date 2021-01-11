import React from 'react';
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

export const ProductView = observer((props) => {

  const {
    productTitle,
    productPrice,
    routeLink,
  } = props;

  return <div>
    <h1>{productTitle}</h1>

    <p><strong>Price: {productPrice} &#36;</strong></p>

    <Link to={routeLink} className="btn btn-primary">Back</Link>
  </div>
});
