import { layout } from "./layout/layout.js";
import { products } from "./components/products.js";
import { products2 } from "./components/products2.js";
import { sidebar } from "./components/sidebar.js";

const body = document.querySelector("main");
const app = document.querySelector("#app");

// Khởi tạo layout ban đầu
app.innerHTML = layout(body.innerHTML);

// sidebar
const sidebarContent = document.querySelector("#sidebar");
if (sidebarContent) sidebarContent.innerHTML = sidebar();

// product
const productContent = document.querySelector("#product");
if (productContent) productContent.innerHTML = products();
