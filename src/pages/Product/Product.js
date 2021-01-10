import React from 'react';
import {inject, observer} from "mobx-react";
import {routesMap} from '~/routes/routes';
import {Page404} from '~p/Page404/Page404';
import {ProductView} from '~cp/ProductView/ProductView';

@inject('stores') @observer class Product extends React.Component {
  render() {
    const productId = this.match.params.id;
    const product = this.stores.products.getById(productId);
    const catalogLink = routesMap.catalog;

    if (product === null) {
      return <Page404/>
    }
    else {
      return (
        <ProductView
          productTitle={product.title}
          productPrice={product.price}
          routeLink={catalogLink}/>
      )
    }
  };
}

export default Product;