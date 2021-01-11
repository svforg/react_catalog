import React from 'react';
import {inject, observer} from "mobx-react";
import {CatalogView} from '~cp/CatalogView/CatalogView';
import {ItemView} from "~/components/presentational/CatalogView/ItemView/ItemView";


@inject('stores') @observer class Catalog extends React.Component {

  isInCart = productId => this.props.stores.cart.isInCart(productId);
  onRemove = productId => this.props.stores.cart.remove(productId);
  onAdd = productId => this.props.stores.cart.add(productId);

  render() {
    const products = this.props.stores.products.products;

    return <CatalogView products={products}
                        isInCart={this.isInCart}
                        onRemove={this.onRemove}
                        onAdd={this.onAdd}/>;
  };
}

export default Catalog;
