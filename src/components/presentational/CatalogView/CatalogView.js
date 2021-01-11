import React from 'react';
import {observer} from "mobx-react";
import {ItemView} from './ItemView/ItemView';

export const CatalogView = observer((
  {
    products
  }
) => {
  return (
    <div>
      <h1>
        Catalog page!
      </h1>

      <div className="row">
        {
          products.map((product) =>
            <ItemView key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
});
