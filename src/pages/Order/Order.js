import React from 'react';
import {inject, observer} from "mobx-react";
import {routesMap} from "~/routes/routes";
import {OrderView} from '~cp/OrderView/OrderView';

@inject('stores') @observer class Order extends React.Component {
  orderUpdateValue = (name, value) => this.stores.updateValue(name, value);
  historyPushToResult = () => this.history.push(routesMap.result);

  render() {
    const {fields, formValid} = this.stores.order;
    const cartTotalPrice = this.stores.cart.totalPrice;
    const cartLink = routesMap.cart;

    return (
      <OrderView
        orderFields={fields}
        orderUpdateValue={this.orderUpdateValue}
        orderIsFormValid={formValid}
        cartTotalPrice={cartTotalPrice}
        routeLinkToCart={cartLink}
        historyPushToResult={this.historyPushToResult}/>
    );
  };
}

export default Order;