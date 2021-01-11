import React from 'react';
import {observer} from 'mobx-react';
import {Product} from "./Product/Product";
import {Link} from 'react-router-dom';
import {Table} from "react-bootstrap";

export const CartView = observer((props) => {

  const {
    cartItemsDetails,
    cartTotalPrice,
    productChange,
    productRemove,
    routeLinkToOrder,
  } = props;

  const cartItems = Array.isArray(cartItemsDetails) && cartItemsDetails.map((product) =>
    <Product key={product.id}
             elem={product}
             onChange={(cnt) => productChange(cnt, product.id)}
             onDelete={() => productRemove(product.id)}/>);

  return (
    <>
      <h1>Products Cart</h1>

      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <td>id</td>
          <td>Title</td>
          <td>Price</td>
          <td>Total</td>
          <td>Current</td>
        </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </Table>

      <p>total price is: <strong>{cartTotalPrice} &#36;</strong></p>

      <Link to={routeLinkToOrder} className="btn btn-primary">Send</Link>
    </>
  )
});

