import React from 'react';
import {inject, observer} from "mobx-react";
import {routesMap} from '~/routes/routes';
import {Page404} from '~p/Page404/Page404';
import {ProductView} from '~cp/ProductView/ProductView';

@inject('stores') @observer class Product extends React.Component {

  render() {
    const productId = this.props.match.params.id;
    const product = this.props.stores.products.getById(productId);
    const catalogLink = routesMap.catalog;

    return (product === null)
      ? <Page404/>
      : <ProductView productTitle={product.title}
                     productPrice={product.price}
                     routeLink={catalogLink}/>
  };
}

export default Product;