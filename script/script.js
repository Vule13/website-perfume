import { layout } from "./layout/layout.js";
import { products } from "./components/products.js";
import { sidebar } from "./components/sidebar.js";
import {
  filterProducts,
  quickSort,
  searchFilter,
} from "./utils/filterProduct.js";
import { productData } from "./data/data.js";
import { translatedValues } from "./utils/translateTitle.js";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./utils/localStorage.js";

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
const isPage = document.querySelector("#product")?.getAttribute("data");
const isPage2 = document.querySelector("#product2")?.getAttribute("data");

// function render product
const renderProduct = (product, productEl) => {
  if (productEl) {
    productEl.innerHTML = product;
  }
};

renderProduct(products(isPage), productContent);
renderProduct(products(isPage2), productContent2);

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

    softTitle.innerHTML = `${translatedTitle.join(", ")}`;

    const softProduct = filterProducts(productData, selectedValues);

    renderProduct(products(isPage, softProduct), productContent);
  })
);

// search product

const searchValue = document.querySelector("#search");

const button = document.querySelector(".header-search_button");
const totalResults = document.querySelector(".search_total-result");
const keyword = document.querySelector(".page-title >span");

let searchKeyword = "";
searchValue.addEventListener("change", (e) => {
  searchKeyword = e.target.value;
});

button.addEventListener("click", () => {
  if (searchKeyword) {
    saveToLocalStorage("searchResult", searchKeyword);
  }
});

if (isPage === "search-product") {
  let searchKeyword = getFromLocalStorage("searchResult");
  keyword.innerHTML = `Kết quả tìm kiếm cho "${searchKeyword}"`;

  const searchArr = searchFilter(productData, searchKeyword);
  renderProduct(products(isPage, searchArr), productContent);
  if (searchArr)
    totalResults.innerHTML = `Có ${searchArr.length} kết quả phù hợp`;
}

// show password

document.addEventListener("DOMContentLoaded", function () {
  var showPasswordButton = document.querySelector(".show-password");
  var showrePasswordButton = document.querySelector(".show-repassword");
  var showrePasswordButton2 = document.querySelector(".show-repassword2");
  var passwordInput = document.getElementById("password");
  var repasswordInput = document.getElementById("re-password");
  var repasswordInput2 = document.getElementById("re-password2");

  showPasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.classList.add("show-icon-pw");
    } else {
      passwordInput.type = "password";
      showPasswordButton.classList.remove("show-icon-pw");
    }
  });

  showrePasswordButton.addEventListener("click", function () {
    if (repasswordInput.type === "password") {
      repasswordInput.type = "text";
      showrePasswordButton.classList.add("show-icon-pw");
    } else {
      repasswordInput.type = "password";
      showrePasswordButton.classList.remove("show-icon-pw");
    }
  });
  showrePasswordButton2.addEventListener("click", function () {
    if (repasswordInput2.type === "password") {
      repasswordInput2.type = "text";
      showrePasswordButton2.classList.add("show-icon-pw");
    } else {
      repasswordInput2.type = "password";
      showrePasswordButton2.classList.remove("show-icon-pw");
    }
  });
});
