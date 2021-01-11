import React from 'react';
import {observer} from "mobx-react";
import {ItemView} from './ItemView/ItemView';

export const CatalogView = observer((props) => {

  const {products, isInCart, onRemove, onAdd} = props;

  const productsList = Array.isArray(products) && products.map(product =>
    <ItemView key={product.id}
              product={product}
              isInCart={isInCart}
              onRemove={onRemove}
              onAdd={onAdd}/>);

  return <div>
    <h1>Catalog page!</h1>

    <ul className="row">{productsList}</ul>
  </div>
});
