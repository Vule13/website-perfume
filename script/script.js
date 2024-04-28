import { layout } from "./layout/layout.js";
import { products } from "./components/products.js";
import { sidebar } from "./components/sidebar.js";
import { filterProducts, quickSort } from "./utils/filterProduct.js";
import { productData } from "./data/data.js";
import { translatedValues } from "./utils/translateTitle.js";

const body = document.querySelector("main");
const app = document.querySelector("#app");

// Khởi tạo layout ban đầu
app.innerHTML = layout(body.innerHTML);

// sidebar
const sidebarContent = document.querySelector("#sidebar");
if (sidebarContent) sidebarContent.innerHTML = sidebar();

// get element product
const productContent = document.querySelector("#product");
const productContent2 = document.querySelector("#product2");

// check page
const isPage = document.querySelector("#product").getAttribute("data");

// function render product
const renderProduct = (product, productEl) => {
  if (productEl) {
    productEl.innerHTML = product;
  }
};

renderProduct(products(isPage), productContent);
renderProduct(products(isPage), productContent2);

//
const softTitle = document.querySelector(".product-filter_title");
//

// select filter
const selectValue = document.querySelector(".product-filter_select");
selectValue &&
  selectValue.addEventListener("change", (e) => {
    const selectedOption = e.target.value;
    let softProduct = [];

    switch (selectedOption) {
      case "htl":
        softTitle.innerHTML = "Giá từ cao đến thấp";
        softProduct = quickSort(productData, true);
        break;
      case "lth":
        softTitle.innerHTML = "Giá từ thấp đến cao";
        softProduct = quickSort(productData, false);
        break;

      default:
        softTitle.innerHTML = "Tất cả sản phẩm";
        softProduct = productData;
        break;
    }
    renderProduct(products(isPage, softProduct), productContent);
  });

// check box filter
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedValues = [];

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedValues.push(checkbox.value);
    } else {
      const index = selectedValues.indexOf(checkbox.value);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }

    if (selectedValues.length === 0) {
      softTitle.innerHTML = `Tất cả sản phẩm`;
      renderProduct(products(isPage), productContent);
      return;
    }

    let translatedTitle = translatedValues(selectedValues);

    console.log(translatedTitle);

    softTitle.innerHTML = `${translatedTitle.join(", ")}`;

    const softProduct = filterProducts(productData, selectedValues);

    renderProduct(products(isPage, softProduct), productContent);
  })
);
