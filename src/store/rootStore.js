import CartModel from './CartModel';
import ProductsModel from './ProductsModel';
import OrderModel from './OrderModel';

class RootStore{
  constructor(){
    this.cart = new CartModel(this);
    this.products = new ProductsModel(this);
    this.order = new OrderModel(this);
  }
}

export default new RootStore();