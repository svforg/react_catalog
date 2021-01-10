import React from 'react';
import css from './Item.module.scss';
import {inject, observer} from "mobx-react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {urlBuilder} from '~/routes/routes';

export const ItemView = inject('stores')(observer((
  {
    stores,
    product,
  }
) => {
  const CartModel = stores.cart;

  return (
    <div className={`col col-lg-4 ${css.col}`}>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price} &#36;
          </Card.Text>
          <hr/>

          <hr/>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={urlBuilder('product', {id: product.id})}>
              Info
            </Link>
            {
              CartModel.isInCart(product.id)
                ? <Button onClick={()=>{CartModel.remove(product.id)}} variant="warning">
                    Remove from cart
                  </Button>
                : <Button onClick={()=>{CartModel.add(product.id)}} variant="success">
                    Add to cart
                  </Button>
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}));
