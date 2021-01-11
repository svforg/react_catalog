import React, {useState} from 'react';
import {observer} from "mobx-react";
import {Button, Form, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import css from './Order.module.scss';

export const OrderView = observer((props) => {

  const {
    orderFields,
    orderUpdateValue,
    routeLinkToCart,
    orderIsFormValid,
    cartTotalPrice,
    historyPushToResult
  } = props;

  let formFields = [];
  for (let name in orderFields) {
    let field = orderFields[name];

    formFields.push(
      <Form.Group key={name} controlId={'order-form-' + name}>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => orderUpdateValue(name, e.currentTarget.value)}
          value={field.value}
        />
        {
          (field.valid === null || field.valid) ? '' :
            <Form.Text className={css.inputErrorText}>
              {field.errorText}
            </Form.Text>
        }
      </Form.Group>
    );
  }

  const [stateModal, setStateModal] = useState(false);
  const showStateModal = () => {
    setStateModal(true);
  };
  const closeStateModal = () => {
    setStateModal(false);
  };
  const confirmStateModal = () => {
    setStateModal(true);
    historyPushToResult()
  };
  const modalTemplate = <Modal show={stateModal} backdrop="static">
    <Modal.Header closeButton onHide={closeStateModal}>
      <Modal.Title>Check yor products</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p><strong>Total: {cartTotalPrice} &#36;</strong></p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={closeStateModal}>
        Close
      </Button>

      <Button variant="primary" onClick={confirmStateModal}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>;

  return <div>
    <h1>Order</h1>

    <Form>{formFields}</Form>

    <Link to={routeLinkToCart} className="btn btn-outline-primary">Back</Link>
    &nbsp;
    <Button variant="primary"
            onClick={showStateModal}
            disabled={!orderIsFormValid}>
      Apply
    </Button>

    {modalTemplate}
  </div>
});
