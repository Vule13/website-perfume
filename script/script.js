import { layout } from "./layout/layout.js";
import { products } from "./components/products.js";
import { sidebar } from "./components/sidebar.js";
import {
  filterProducts,
  quickSort,
  searchFilter,
} from "./utils/filterProduct.js";
import { productChanel, productData, productMale } from "./data/data.js";
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
const pagination = document.querySelector(".pagination");

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
      pagination.style.display = "flex";

      renderProduct(products(isPage), productContent);
      return;
    }

    let translatedTitle = translatedValues(selectedValues);

    softTitle.innerHTML = `${translatedTitle.join(", ")}`;

    if (selectedValues.length === 1 && checkbox.value === "male-perfume") {
      renderProduct(products(isPage, productMale), productContent);
      return;
    }

    if (selectedValues.length === 1 && checkbox.value === "chanel") {
      renderProduct(products(isPage, productChanel), productContent);
      return;
    }

    const softProduct = filterProducts(productData, selectedValues);

    if (softProduct.length < 12) {
      pagination.style.display = "none";
    } else {
      pagination.style.display = "flex";
    }

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

  showPasswordButton?.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.classList.add("show-icon-pw");
    } else {
      passwordInput.type = "password";
      showPasswordButton.classList.remove("show-icon-pw");
    }
  });

  showrePasswordButton?.addEventListener("click", function () {
    if (repasswordInput.type === "password") {
      repasswordInput.type = "text";
      showrePasswordButton.classList.add("show-icon-pw");
    } else {
      repasswordInput.type = "password";
      showrePasswordButton.classList.remove("show-icon-pw");
    }
  });
  showrePasswordButton2?.addEventListener("click", function () {
    if (repasswordInput2.type === "password") {
      repasswordInput2.type = "text";
      showrePasswordButton2.classList.add("show-icon-pw");
    } else {
      repasswordInput2.type = "password";
      showrePasswordButton2.classList.remove("show-icon-pw");
    }
  });
});

//

const quantityValue = document.querySelector("#quantity");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const decrementBtns = document.querySelectorAll('[id^="minus"]');
const incrementBtns = document.querySelectorAll('[id^="plus"]');

plus?.addEventListener("click", () => {
  quantityValue.value++;
});

minus?.addEventListener("click", () => {
  if (quantityValue.value > 1) {
    quantityValue.value--;
  }
});

decrementBtns.forEach((btn) => {
  btn.addEventListener("click", updateQuantity);
});

incrementBtns.forEach((btn) => {
  btn.addEventListener("click", updateQuantity);
});

const paymentMethods = document.querySelectorAll(
  ".payment-method_item > input"
);
const paymentInfo = document.querySelector(".payment-info");

paymentMethods?.forEach((paymentMethod) => {
  paymentMethod.addEventListener("change", () => {
    if (paymentMethod.value == 2) {
      paymentInfo.style.display = "block";
    } else {
      paymentInfo.style.display = "none";
    }
  });
});

// popup

const deleteButtons = document.querySelectorAll("#del");
const popup = document.querySelector("#popup");
const cancel = document.querySelector("#cancel");
const deleteProduct = document.querySelector("#delete");
const addToCard = document.querySelector(".btn-addtocard");
const productItems = document.querySelectorAll(".product-item_card");
const popupContentLogin = document.querySelector(".popup-content_login");

let currentRow;
deleteProduct?.addEventListener("click", () => {
  currentRow.remove();

  popup.style.display = "none";
});

popup?.addEventListener("click", (event) => {
  if (!event.target.closest(".popup-content")) {
    popup.style.display = "none";
  }
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popupContentLogin.style.display = "none";
    currentRow = button.closest("tr");
    popup.style.display = "flex";
  });
});

productItems.forEach((product) => {
  product.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

cancel?.addEventListener("click", () => {
  popup.style.display = "none";
});

addToCard?.addEventListener("click", () => {
  popup.style.display = "flex";
});

//

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotal);
});

function updateTotal() {
  let total = 0;
  const rows = document.querySelectorAll("table tr");

  rows.forEach((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    const priceCell = row.querySelector("td:nth-child(3)");

    if (checkbox && checkbox.checked && priceCell) {
      const price = parseFloat(
        priceCell.textContent
          .replace("đ", "")
          .replace(/\./g, "")
          .replace(/,/g, "")
      );
      total += price;
    }
  });

  const totalElement = document.querySelector(
    ".cart_total-number span:last-child"
  );
  if (totalElement) {
    totalElement.textContent = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(total);
  }
}

function updateQuantity(event) {
  const btn = event.target;
  const row = btn.closest("tr");
  const quantityInput = row.querySelector('input[type="number"]');
  const priceCell = row.querySelector("td:nth-child(3)");
  const totalCell = row.querySelector("td:nth-child(5)");

  if (quantityInput && priceCell && totalCell) {
    let quantity = parseInt(quantityInput.value);
    const price = parseFloat(
      priceCell.textContent
        .replace("đ", "")
        .replace(/\./g, "")
        .replace(/,/g, "")
    );

    if (btn.id.startsWith("minus")) {
      if (quantity > 1) {
        quantity--;
      }
    } else if (btn.id.startsWith("plus")) {
      quantity++;
    }

    quantityInput.value = quantity;
    const total = price * quantity;
    totalCell.textContent = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(total);

    updateTotal();
  }
}
updateTotal();

// login
let isLogin = getFromLocalStorage("isLogin") || false;
const loginBtn = document.querySelector("#login-action");
const loginAvt = document.querySelector(".header-account");
const logoutBtn = document.querySelector("#logout");
const logout = document.querySelector("#logout-btn");

loginBtn?.addEventListener("click", () => {
  saveToLocalStorage("isLogin", true);
});

if (isLogin) {
  loginAvt.innerHTML =
    "<img class='avt-login' src='./assets/avatar user.jpg' alt='avt'/>";
} else {
  loginAvt.innerHTML =
    "<img id='avatar' src='./assets/user.png' alt='account' />";
}

logoutBtn?.addEventListener("click", () => {
  popup.style.display = "flex";
});

logout?.addEventListener("click", () => {
  localStorage.removeItem("isLogin");
  popup.style.display = "none";
  window.location.replace("./index.html");
});

// cart_total-btn
const cartTotal = document.querySelector(".cart_total-btn");
const popupContent = document.querySelector(".popup-content");

cartTotal?.addEventListener("click", () => {
  if (isLogin) {
    window.location.replace("./payment.html");
  }

  popup.style.display = "flex";
  popupContent.style.display = "none";
  popupContentLogin.style.display = "block";
});

const discountValue = document.querySelector("#order-input");
const discountBtn = document.querySelector(".order-discount_btn > button");

discountValue.addEventListener("change", () => {
  if (discountValue.value) {
    discountBtn.style.background = "#176ab4";
  }
});
