import React from 'react';
import {observer} from "mobx-react";

export const ResultView = observer((
  {
    orderDataName,
    cartTotalPrice
  }
) => {
  return (
    <div>
      <h1>
        Congratulations!
      </h1>
      <p>Hi, {orderDataName}!</p>
      <p><strong>Total: {cartTotalPrice}  &#36;</strong></p>
    </div>
  );
});