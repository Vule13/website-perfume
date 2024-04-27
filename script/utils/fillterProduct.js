import { productData } from "../data/data.js";

export function filterProducts(selectedValues) {
  const filteredProducts = productData.filter((product) => {
    const categories = selectedValues.categories || [];
    const brands = selectedValues.brands || [];
    const prices = selectedValues.prices || [];

    const matchesCategory =
      !categories.length ||
      categories.some((category) => product.category === category);

    const matchesBrand =
      !brands.length || brands.some((brand) => product.brand === brand);

    const matchesPrice =
      !prices.length ||
      prices.some((price) => {
        switch (price) {
          case "lt2m":
            return product.price < 2000000;
          case "2t2.5":
            return product.price >= 2000000 && product.price <= 2500000;
          case "2.5t3":
            return product.price >= 2500000 && product.price <= 3000000;
          case "gt3":
            return product.price > 3000000;
          default:
            return false;
        }
      });

    return matchesCategory && matchesBrand && matchesPrice;
  });

  return filteredProducts;
}

function quickSort(arr, cdt) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (cdt) {
      if (arr[i].price < pivot.price) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    } else {
      if (arr[i].price > pivot.price) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
