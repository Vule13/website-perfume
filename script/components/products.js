import { productItem } from "./productItem.js";
import { productData } from "../data/data.js";

export const products = () => {
  let product = "";
  productData.forEach((item) => {
    product += productItem(item);
  });

  return product;
};
