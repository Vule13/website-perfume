import { productItem } from "./productItem.js";
import { productData, productHome } from "../data/data.js";

import { filterProducts } from "../utils/fillterProduct.js";

export const products = (isPage) => {
  let product = "";

  switch (isPage) {
    case "home":
      productHome.forEach((item) => {
        product += productItem(item);
      });
      break;

    default:
      productData.forEach((item) => {
        product += productItem(item);
      });
      break;
  }

  return product;
};
