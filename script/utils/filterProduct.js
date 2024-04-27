export function filterProducts(productData, selectedValues) {
  const filteredData = productData.filter((item) => {
    return selectedValues.some((value) => {
      if (value === "male-perfume" && item.category === "male-perfume") {
        return true;
      }
      if (value === "female-perfume" && item.category === "female-perfume") {
        return true;
      }
      if (value === "unisex-perfume" && item.category === "unisex-perfume") {
        return true;
      }
      if (value === "niche-perfume" && item.category === "niche-perfume") {
        return true;
      }
      if (value === "chanel" && item.brand === "Chanel") {
        return true;
      }
      if (value === "dior" && item.brand === "Dior") {
        return true;
      }
      if (value === "roja" && item.brand === "Roja") {
        return true;
      }
      if (value === "yeves-st" && item.brand === "Yves Saint Laurent") {
        return true;
      }
      if (value === "lt2m" && item.price < 2000000) {
        return true;
      }
      if (value === "2t2.5" && item.price >= 2000000 && item.price <= 2500000) {
        return true;
      }
      if (value === "2.5t3" && item.price >= 2500000 && item.price <= 3000000) {
        return true;
      }
      if (value === "gt3" && item.price > 3000000) {
        return true;
      }
      return false;
    });
  });

  return filteredData;
}

export function quickSort(arr, descending = false) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (descending ? arr[i].price > pivot.price : arr[i].price < pivot.price) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...quickSort(left, descending),
    pivot,
    ...quickSort(right, descending),
  ];
}
