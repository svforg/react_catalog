import React from 'react';
import css from './Product.module.scss';
import ProductCount from '~c/shared/ProductCount/ProductCount';
import {inject, observer} from "mobx-react";

export const Product = observer((
  {
    elem,
    onChange,
    onDelete
  }
) => {

  return (
    <tr className={css.tableRow}>
      <td>{elem.id}</td>
      <td>{elem.title}</td>
      <td>{elem.price} &#36;</td>
      <td>{elem.rest}</td>
      <td>
        <ProductCount
          min={1}
          max={elem.rest}
          cnt={elem.cnt}
          onChange={onChange}/>
      </td>
      <td>
        <button onClick={onDelete}>&#10006;</button>
      </td>
    </tr>
  );
});
//export  const Product = React.memo(ProductMemo);
//export default memo(Product);
//export default pure(Product);