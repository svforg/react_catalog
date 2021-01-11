import React from 'react';
import css from './Product.module.scss';
import ProductCount from '~c/shared/ProductCount/ProductCount';
import {observer} from "mobx-react";
import {Button} from "react-bootstrap";

export const Product = observer((props) => {

  const {
    elem,
    onChange,
    onDelete
  } = props;

  return <tr className={css.tableRow}>
    <td>{elem.id}</td>
    <td>{elem.title}</td>
    <td>{elem.price} &#36;</td>
    <td>{elem.rest}</td>
    <td>
      <ProductCount min={1}
        max={elem.rest}
        cnt={elem.cnt}
        onChange={onChange}/>
    </td>
    <td><Button onClick={onDelete} variant="warning">&#10006;</Button></td>
  </tr>
});