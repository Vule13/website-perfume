import { productItem2 } from "./productItem2.js";
import { productData } from "../data/data.js";

export const products2 = () => {
  let product2 = "";
  productData.forEach((item) => {
    product2 += productItem2(item);
  });

  return product2;
};
