import { sideBarValues } from "../data/data.js";

export const sidebar = () => {
  let sidebar = "<h2>Bộ lọc</h2>";

  sideBarValues.forEach((item) => {
    sidebar += `
    <div class="sidebar-section">
    <h3 class="sidebar-title">${item.title}</h3>
    <div class="sidebar-content">
      ${item.arr
        .map((item) => {
          return `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="${item.value}" id="${item.value}">
          <label class="form-check-label" for="${item.value}">${item.name}</label>
        </div>
        `;
        })
        .join("")}
    </div>
  `;
  });

  return sidebar;
};
