import React from 'react';
import {inject, observer} from "mobx-react";
import {routesMap} from "~/routes/routes";
import {OrderView} from '~cp/OrderView/OrderView';

@inject('stores') @observer
class Order extends React.Component {

  orderUpdateValue = (name, value) => this.props.stores.order.updateValue(name, value);
  historyPushToResult = () => this.props.history.push(routesMap.result);

  render() {
    const {fields, formValid} = this.props.stores.order;
    const cartTotalPrice = this.props.stores.cart.totalPrice;
    const cartLink = routesMap.cart;

    return <OrderView orderFields={fields}
                      orderUpdateValue={this.orderUpdateValue}
                      orderIsFormValid={formValid}
                      cartTotalPrice={cartTotalPrice}
                      routeLinkToCart={cartLink}
                      historyPushToResult={this.historyPushToResult}/>
  };
}

export default Order;