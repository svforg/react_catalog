import React from 'react';
import {inject, observer} from "mobx-react";
import {CatalogView} from '~cp/CatalogView/CatalogView';


@inject('stores') @observer class Catalog extends React.Component {
  render() {
    const products = this.props.stores.products.products;

    return (

      <CatalogView products={products}/>
    );
  };
}

export default Catalog;
