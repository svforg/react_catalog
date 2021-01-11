import React from 'react';
import {inject, observer} from "mobx-react";
import {ResultView} from '~cp/ResultView/ResultView';
import {Page404} from '~p/Page404/Page404';

@inject('stores') @observer class Result extends React.Component {
  render() {
    const orderDataName = this.props.stores.order.getData.name;
    const cartTotalPrice = this.props.stores.cart.totalPrice;

    if (orderDataName === null || cartTotalPrice === null) {
      return <Page404/>
    } else {
      return (
        <ResultView
          orderDataName={orderDataName}
          cartTotalPrice={cartTotalPrice}/>
      );
    }
  };
}

export default Result;