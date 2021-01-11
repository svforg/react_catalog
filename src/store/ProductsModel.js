import {observable, computed, action} from 'mobx';

//class Products
export default class{
  constructor(rootStore){
    this.rootStore = rootStore;
  }

  @observable products = getProducts();

  @computed get productsMap(){
    let productsMap = {};

    Array.isArray(this.products) && this.products.forEach((product, index) => {
      productsMap[product.id.toString()] = index;
    });

    return productsMap;
    //{'100': 0, '101': 1, '103': 2, '105': 3}
  }

  getById(id){
    let index = this.productsMap[id];

    if (index === undefined) {
      return null;
    }

    return this.products[index];
  }
}


// server api
function getProducts() {
  return [
    {
      id: 100,
      title: 'Iphone 200',
      price: 12000,
      rest: 10
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8
    },
    {
      id: 110,
      title: 'Iphone 1200',
      price: 121200,
      rest: 10
    },
    {
      id: 111,
      title: 'Samsung 1AAZ8',
      price: 22100,
      rest: 5
    },
    {
      id: 113,
      title: 'Nokia 13310',
      price: 5100,
      rest: 2
    },
    {
      id: 115,
      title: 'Huawei 1ZZ',
      price: 15100,
      rest: 8
    },
    {
      id: 120,
      title: 'Iphone 220',
      price: 12200,
      rest: 10
    },
    {
      id: 121,
      title: 'Samsung 2AAZ8',
      price: 22220,
      rest: 5
    },
    {
      id: 123,
      title: 'Nokia 32210',
      price: 52200,
      rest: 2
    },
    {
      id: 125,
      title: 'Huawei 2ZZ',
      price: 152200,
      rest: 8
    }
  ];
}