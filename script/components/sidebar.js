import { sideBarValues } from "../data/data.js";

export const sidebar = () => {
  let sidebar = "<h2 class='sidebar-heading'>Bộ lọc</h2>";

  sideBarValues.forEach((item) => {
    sidebar += `
    <div class="sidebar-section">
      <h3 class="sidebar-title">${item.title}</h3>
      <div class="sidebar-content">
        ${item.arr
          .map((item) => {
            return `
          <div class="form-check">
            <label class="check-box">
              <input class="form-check-input" type="checkbox" value="${item.value}">
              <span class="check-mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M0 0V20H20V0H0ZM8.17308 15.0183L4.29808 10.712L5.44183 9.68269L8.13414 12.674L14.5192 5.07019L15.699 6.05769L8.17308 15.0183Z" fill="#176AB4"/>
                </svg>
              </span>
            </label>
            <label class="form-check-label" for="${item.value}">${item.name}</label>
          </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
  });

  return sidebar;
};
