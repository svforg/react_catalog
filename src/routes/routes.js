import Cart from "~p/Cart/Cart";
import Catalog from "~p/Catalog/Catalog";
import Order from "~p/Order/Order";
import Product from "~p/Product/Product";
import Result from "~p/Result/Result";
import {Page404} from "~p/Page404/Page404";

export const routes = [
  {
    name: "cart",
    url: "/cart",
    component: Cart,
    exact: true,
  },
  {
    name: "catalog",
    url: "/",
    component: Catalog,
    exact: true,
  },
  {
    name: "order",
    url: "/order",
    component: Order,
    exact: true,
  },
  {
    name: "product",
    url: "/catalog/:id",
    component: Product,
    exact: false,
  },
  {
    name: "result",
    url: "/result",
    component: Result,
    exact: true,
  },
  {
    url: "**",
    component: Page404,
  },
];
let routesMap = {};

routes.map(
  route => route.hasOwnProperty("name") && (routesMap[route.name] = route.url)
);

let urlBuilder = (name, params) => {

  if(!routesMap.hasOwnProperty(name)){
    return null;
  }

  let url = routesMap[name];

  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }

  return url;
};

export {routesMap, urlBuilder};
