import { productItem } from "./productItem.js";
import { productData, productHome } from "../data/data.js";

import { filterProducts } from "../utils/fillterProduct.js";

export const products = (isPage) => {
  let product = "";

  switch (isPage) {
    case "home":
      productHome.forEach((item) => {
        product += productItem(item, 3);
      });
      break;

    default:
      productData.forEach((item) => {
        product += productItem(item, 4);
      });
      break;
  }

  return product;
};
