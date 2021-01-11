import {observable, computed, action} from 'mobx';

//class Cart
export default class{
  constructor(rootStore){
    this.rootStore = rootStore;
  }

  @observable itemsInCart = [];

  @computed get itemsDetails(){

    return Array.isArray(this.itemsInCart) && this.itemsInCart.map((itemInCart) => {
      let product = this.rootStore.products.getById(itemInCart.id);

      return {...product, cnt: itemInCart.cnt};
    });
  }

  @computed get totalPrice(){

    return this.itemsDetails.reduce((totalPrice, itemInCart) => {
      return totalPrice + itemInCart.price * itemInCart.cnt;
    }, 0);
  }

  @computed get isInCart(){
    return (productId) =>
      this.itemsInCart.some((product) => product.id === productId);
  }

  @action add(productId){
    this.itemsInCart.push({id: productId, cnt: 1});
  }

  @action change(cnt, productId){
    let index = this.itemsInCart.findIndex((product) => product.id === productId);

    if (index !== -1) {
      this.itemsInCart[index].cnt = cnt;
    }
  }

  @action remove(productId){
    let index = this.itemsInCart.findIndex((product) => product.id === productId);

    if(index !== -1){
      this.itemsInCart.splice(index, 1);
    }
  }
}
