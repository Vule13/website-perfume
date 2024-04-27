import { productItem } from "./productItem.js";
import { productData, productHome } from "../data/data.js";

export const products = (isPage, productSoft) => {
  let product = "";

  let softProduct = productSoft || productData;

  switch (isPage) {
    case "home":
      productHome.forEach((item) => {
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
