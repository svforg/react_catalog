import React from 'react';
import {inject, observer} from 'mobx-react';
import {routesMap} from '~/routes/routes';
import {CartView} from '~cp/CartView/CartView';


@inject('stores') @observer class Cart extends React.Component {
  productChange = (cnt, productId) => this.props.stores.cart.change(cnt, productId);
  productRemove = (productId) => this.props.stores.cart.remove(productId);

  render() {
    const {itemsDetails, totalPrice} = this.props.stores.cart;

    const orderLink = routesMap.order;

    return (
      <CartView
        cartItemsDetails={itemsDetails}
        cartTotalPrice={totalPrice}
        productChange={this.productChange}
        productRemove={this.productRemove}
        routeLinkToOrder={orderLink}/>
    );
  };
}

export default Cart;

