import React from 'react';
import css from './Item.module.scss';
import {inject, observer} from "mobx-react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {urlBuilder} from '~/routes/routes';

export const ItemView = inject('stores')(observer((props) => {

  const {product, isInCart, onRemove, onAdd} = props;

  const onRemoveCallback = ()=> onRemove(product.id);
  const onAddCallback = ()=> onAdd(product.id);

  const buttonCart = isInCart(product.id)
    ? <Button onClick={onRemoveCallback} variant="warning">
      Remove from cart
    </Button>
    : <Button onClick={onAddCallback} variant="success">
      Add to cart
    </Button>;

  return <li className={`col col-lg-4 ${css.col}`}>
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>

        <Card.Text>Price: {product.price} &#36;</Card.Text>

        <div className="d-flex align-items-center justify-content-between">
          <Link to={urlBuilder('product', {id: product.id})}>Info</Link>

          {buttonCart}
        </div>
      </Card.Body>
    </Card>
  </li>
}));
