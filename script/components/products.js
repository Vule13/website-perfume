import { productItem } from "./productItem.js";
import {
  productData,
  productHome,
  productHome2,
  productRelated,
} from "../data/data.js";

export const products = (isPage, productSoft) => {
  let product = "";

  let softProduct = productSoft || productData;

  switch (isPage) {
    case "home":
      productHome.forEach((item) => {
        product += productItem(item, 3);
      });
      break;
    case "home2":
      productHome2.forEach((item) => {
        product += productItem(item, 3);
      });
      break;
    case "detail-page":
      productRelated.forEach((item) => {
        product += productItem(item, 3);
      });
      break;
    case "search-product":
      softProduct.forEach((item) => {
        product += productItem(item, 3);
      });
      break;
    default:
      softProduct.forEach((item) => {
        product += productItem(item, 4);
      });
      break;
  }

  return product;
};
